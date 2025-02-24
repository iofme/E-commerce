using API.DTOs;
using API.Entities;
using API.Helpers;
using API.Interface;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace API.Data;
public class ProductRepository(DataContext context, IMapper mapper) : IProductRepository
{
    public async Task<Product?> GetProductByIdAsync(int id)
    {
        return await context.Products.Include(f => f.FeedBack).FirstOrDefaultAsync(p => p.Id == id);
    }

    public async Task<PagedList<ProductDto>> GetProductsAsync(UserParams userParams)
    {
        var query = context.Products.Include(f => f.FeedBack).ProjectTo<ProductDto>(mapper.ConfigurationProvider);

        return await PagedList<ProductDto>.CreateAsync(query, userParams.PageNumber, userParams.PageSize);
    }
    public async Task<IEnumerable<FeedBackUser>> GetFeedBackAsync(int id)
    {
        var p = await context.Products.Include(f => f.FeedBack).FirstOrDefaultAsync(p => p.Id == id);

        return p!.FeedBack;
    }
    public async Task<IEnumerable<Product?>> GetProductsAsyncByTime()
    {
        return await context.Products.OrderByDescending(d => d.Created).ToListAsync();
    }

    public async Task<IEnumerable<Product?>> GetProductsByStar()
    {
        return await context.Products.ToListAsync();
    }
    public async Task<bool> SaveAllAsync()
    {
        return await context.SaveChangesAsync() > 0;
    }
    public void UpdateProduct(Product product)
    {
        context.Entry(product).State = EntityState.Modified;
    }

}

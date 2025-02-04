using API.Entities;
using API.Interface;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace API.Data;
public class ProductRepository(DataContext context) : IProductRepository
{
    public async Task<Product?> GetProductByIdAsync(int id)
    {
        return await context.Products.Include(f => f.FeedBack).FirstOrDefaultAsync(p => p.Id == id);
    }

    public async Task<IEnumerable<Product?>> GetProductsAsync()
    {
        return await context.Products.Include(f => f.FeedBack).ToListAsync();
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

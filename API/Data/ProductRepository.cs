using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Interface;
using Microsoft.EntityFrameworkCore;

namespace API.Data;
    public class ProductRepository(DataContext context) : IProductRepository
    {
        public async Task<Product?> GetProductByIdAsync(int id)
        {
            return await context.Products.FindAsync(id);
        }

        public async Task<IEnumerable<Product?>> GetProductsAsync()
        {
            return await context.Products.ToListAsync();
        }

    public async Task<IEnumerable<Product?>> GetProductsAsyncByTime()
    {
        return context.Products.OrderByDescending(d => d.Created);
    }

    public Task<IEnumerable<Product?>> GetProductsByStar()
    {
        throw new NotImplementedException();
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

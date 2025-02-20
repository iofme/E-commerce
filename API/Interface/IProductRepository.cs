using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Helpers;

namespace API.Interface
{
    public interface IProductRepository
    {
        
        void UpdateProduct(Product product);
        Task<bool> SaveAllAsync();
        Task<PagedList<Product?>> GetProductsAsync(UserParams userParams);
        Task<PagedList<FeedBackUser>> GetFeedBackAsync(int id, UserParams userParams);
        Task<Product?> GetProductByIdAsync(int id);
        Task<PagedList<Product?>> GetProductsAsyncByTime(UserParams userParams);
        Task<PagedList<Product?>> GetProductsByStar(UserParams userParams);
    }
}
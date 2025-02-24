using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Helpers;

namespace API.Interface
{
    public interface IProductRepository
    {
        
        void UpdateProduct(Product product);
        Task<bool> SaveAllAsync();
        Task<PagedList<ProductDto>> GetProductsAsync(UserParams userParams);
        Task<IEnumerable<FeedBackUser>> GetFeedBackAsync(int id);
        Task<Product?> GetProductByIdAsync(int id);
        Task<IEnumerable<Product?>> GetProductsAsyncByTime();
        Task<IEnumerable<Product?>> GetProductsByStar();
    }
}
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class ProductController(DataContext context) : Controller
    {
        [HttpPost("register")]
        public async Task<ActionResult<Product>> RegisterProduct(RegisterProductDto registerProductDto)
        {
            var product = new Product
            {
                NameProduct = registerProductDto.NameProduct,
                Star = registerProductDto.Star,
                Price = registerProductDto.Price,
                Description = registerProductDto.Description,
                Colors = registerProductDto.Colors,
                Size = registerProductDto.Size,
                Quantidade = registerProductDto.Quantidade
            };
            context.Products.Add(product);
            await context.SaveChangesAsync();

            return product;
        }
    }
}
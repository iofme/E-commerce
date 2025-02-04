using System.Security.Claims;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interface;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class ProductController(DataContext context, IProductRepository repository, IMapper mapper) : Controller
    {
        [HttpPost("register")]
        public async Task<ActionResult<Product>> RegisterProduct(RegisterProductDto registerProductDto)
        {
            var product = new Product
            {
                NameProduct = registerProductDto.NameProduct,
                Price = registerProductDto.Price,
                Description = registerProductDto.Description,
                Colors = registerProductDto.Colors,
                Size = registerProductDto.Size,
                Quantidade = registerProductDto.Quantidade,
                Style = registerProductDto.Style,
                Type = registerProductDto.Type,
            };
            context.Products.Add(product);
            await context.SaveChangesAsync();

            return product;
        }

        [HttpGet]
        public async Task<IEnumerable<ProductDto?>> GetProdutuc()
        {
            var produtos = await repository.GetProductsAsync();

            var productToReturn = mapper.Map<IEnumerable<ProductDto>>(produtos);

            return productToReturn;
        }

        [HttpGet("time")]
        public async Task<IEnumerable<ProductDto?>> GetProdutucByTime()
        {
            var produtoTime = await repository.GetProductsAsyncByTime();

            var productToReturn = mapper.Map<IEnumerable<ProductDto>>(produtoTime);

            return productToReturn;
        }

        [HttpGet("star")]
        public async Task<IEnumerable<ProductDto?>> GetProdutucByStar()
        {
            var produtoStar = await repository.GetProductsByStar();

            var productToReturn = mapper.Map<IEnumerable<ProductDto>>(produtoStar);

            return productToReturn;
        }


        [HttpGet("{id:int}")]
        public async Task<ActionResult<ProductDto>> GetProdutucById(int id)
        {
            var produtos = await repository.GetProductByIdAsync(id);

            if (produtos == null) return NotFound("Falha ao achar o usuário pelo Id");

            return mapper.Map<ProductDto>(produtos);
        }


        [HttpPost("addFeedback/{id}")]
        public async Task<ActionResult> AddFeedBack(int id, FeedBackUserDto feedBackUserDto)
        {
            var product = await repository.GetProductByIdAsync(id);

            if (product == null) return BadRequest("Produto não encontrado");

            var feedback = new FeedBackUser
            {
                Star = feedBackUserDto.Star,
                FeedBack = feedBackUserDto.FeedBack
            };
            
            product.FeedBack.Add(feedback);

            repository.UpdateProduct(product);

            await repository.SaveAllAsync();

            return NoContent();
        }


    }
}
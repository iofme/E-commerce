using API.Data;
using API.DTOs;
using API.Entities;
using API.Extension;
using API.Helpers;
using API.Interface;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class ProductController(DataContext context, IUserRepository userRepository, IProductRepository repository, IMapper mapper) : Controller
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
                Gender = registerProductDto.Gender,
                Style = registerProductDto.Style,
                Type = registerProductDto.Type,
            };
            context.Products.Add(product);
            await context.SaveChangesAsync();

            return product;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductDto?>>> GetProdutucs([FromQuery]UserParams userParams)
        {
            var products = await repository.GetProductsAsync(userParams);

            Response.AddPaginationHeader(products);

            return Ok(products);
        }

        [HttpGet("feedback/{id:int}")]
        public async Task<IEnumerable<FeedBackUser>> GetProdutucWithFeedBack(int id)
        {
            var produto = await repository.GetFeedBackAsync(id);

            if (produto == null) NotFound("Não foi possivel achar o produto pelo id");


            return produto!;
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

            ProductDto product = mapper.Map<ProductDto>(produtos);

            product.AVGStar = product?.FeedBack?.Average(f => f.Star);

            return Ok(product);
        }

        [Authorize]
        [HttpPost("addFeedback/{id:int}")]
        public async Task<ActionResult> AddFeedBack(int id, FeedBackUserDto feedBackUserDto)
        {
            var product = await repository.GetProductByIdAsync(id);

            var user = await userRepository.GetUserById(User.GetUserId());

            if (product == null) return BadRequest("Produto não encontrado");

            var feedback = new FeedBackUser
            {
                Star = feedBackUserDto.Star,
                FeedBack = feedBackUserDto.FeedBack,
                UserName = user.UserName
            };

            product.FeedBack.Add(feedback);

            repository.UpdateProduct(product);

            await repository.SaveAllAsync();

            return NoContent();
        }

        [HttpPost("carrinho/{productId:int}")]
        public async Task<ActionResult> AdicionarCarrinho(int productId)
        {
            var product = await repository.GetProductByIdAsync(productId);

            if (product == null) BadRequest("Não foi possivel achar o produto");

            var user = await userRepository.GetUserById(User.GetUserId());

            user!.Product.Add(product!);

            userRepository.UpdateUser(user);

            await userRepository.SaveAllAsync();

            return NoContent();
        }

        [HttpDelete("carrinho/{productId:int}")]
        public async Task<ActionResult> RemoveCarrinho(int productId)
        {
            var product = await repository.GetProductByIdAsync(productId);

            if (product == null) BadRequest("Não foi possivel achar o produto");

            var user = await userRepository.GetUserById(User.GetUserId());

            user!.Product.Remove(product!);

            userRepository.UpdateUser(user);

            await userRepository.SaveAllAsync();

            return NoContent();
        }
    }
}
using System.Security.Cryptography;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Extension;
using API.Interface;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class UsersController(UserManager<Users> userManager, IUserRepository userRepository, ITokenService tokenService, IMapper mapper) : Controller
    {
        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterUser register)
        {
            using var hmac = new HMACSHA512();

            var user = mapper.Map<Users>(register);

            user.UserName = register.UserName.ToLower();

            var result = await userManager.CreateAsync(user, register.Password);

            if (!result.Succeeded) return BadRequest(result.Errors);

            return new UserDto
            {
                Username = user.UserName,
                Token = await tokenService.CreateToken(user),
                Id = user.Id,
            };
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginUser login)
        {
            var user = await userManager.Users.FirstOrDefaultAsync(x => x.NormalizedUserName == login.Username.ToUpper());

            if (user == null || user.UserName == null) return BadRequest("Usuario invalido");

            var result = await userManager.CheckPasswordAsync(user, login.Password);

            if (!result) return Unauthorized();

            return new UserDto
            {
                Username = user.UserName,
                Token = await tokenService.CreateToken(user),
                Id = user.Id,
            };
        }

        [HttpGet]
        public async Task<IEnumerable<MemberDto>> GetUsers()
        {
            var users = await userRepository.GetUsers();

            var returnUsers = mapper.Map<IEnumerable<MemberDto>>(users);

            return returnUsers;
        }

        [HttpGet("carrinho")]
        public async Task<MemberDto> GetUser()
        {
            var user = await userRepository.GetUserById(User.GetUserId());

            if(user == null) NotFound("Não foi possivel encontrar o usuário");

            return mapper.Map<MemberDto>(user);
        }

        [HttpGet("{id}")]
        public async Task<MemberDto> getUserById(int id)
        {
            var user = await userRepository.GetUserById(id);

            return mapper.Map<MemberDto>(user);
        }
        
    }
}
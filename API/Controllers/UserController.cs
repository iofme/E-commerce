using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [Route("/api/[controller]")]
    public class UserController(DataContext context) : Controller
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProdutuc()
        {
            var produtos = await context.Products.ToListAsync();

            return produtos;
        }

        
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.DTOs
{
    public class MemberDto
    {
        public string? UserName { get; set; }
        public List<Product> Product { get; set; } = [];
        public double SendStar { get; set; }
        public string? Role { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.DTOs
{
    public class ProductDto
    {
        public int Id { get; set; }
        public required string NameProduct { get; set; }
         public IEnumerable<string> FeedBack { get; set; } = [];
        public double Price { get; set; }
        public required string Description { get; set; }
        public required string Type { get; set; }
        public required string Style { get; set; }
        public required string Colors { get; set; }
        public required string Size { get; set; }
        public int Quantidade { get; set; }
        public DateTime Created { get; set; } = DateTime.UtcNow;
    }
}
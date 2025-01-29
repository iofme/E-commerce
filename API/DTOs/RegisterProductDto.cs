using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.DTOs
{
    public class RegisterProductDto
    {
        [Required]
        public required string NameProduct { get; set; }
        [Required]
        public double Price { get; set; }

        public List<FeedBackUser> FeedBack { get; set; } = [];

        [Required]
        public required string Description { get; set; }
        [Required]
        public required string Colors { get; set; }
        [Required]
        public required string Type { get; set; }
        [Required]
        public required string Style { get; set; }
        [Required]
        public required string Size { get; set; }
        [Required]
        public int Quantidade { get; set; }
    }
}
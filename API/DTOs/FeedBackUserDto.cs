using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class FeedBackUserDto
    {
        public double Star { get; set; }
        public string? FeedBack { get; set; }
        public string? UserName { get; set; }
        public DateTime Created { get; set; } = DateTime.UtcNow;
    }
}
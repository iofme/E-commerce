using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class ProductUpdate
    {
        public int Star { get; set; }
        public IEnumerable<string> FeedBack { get; set; } = [];
    }
}
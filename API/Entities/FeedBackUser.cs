using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class FeedBackUser
    {
        public int Id { get; set; }
        public int Star { get; set; }
        public string? FeedBack { get; set; }
    }
}
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    namespace API.Entities
    {
        public class Product
        {
            public int Id { get; set; }
            public required string NameProduct { get; set; }
            public List<FeedBackUser>? FeedBack { get; set; } = [];
            public double Price { get; set; }
            public required string Description { get; set; }
            public required string Gender { get; set; }
            public required string Type { get; set; }
            public required string Style { get; set; }
            public required List<string> Colors { get; set; } = [];
            public required List<string> Size { get; set; } = [];
            public int Quantidade { get; set; }
            public DateTime Created { get; set; } = DateTime.UtcNow;
        }
    }
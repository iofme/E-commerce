using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace API.Entities
{
    public class Users : IdentityUser<int>
    {
        public List<Product> Product { get; set; } = [];
        public double SendStar { get; set; }
        public string? Role { get; set; }
        public string? SendFeedback { get; set; }
        public ICollection<UserRole> UserRoles { get; set; } = [];
    }
}
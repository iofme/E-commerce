using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace API.Entities
{
    public class Users : IdentityUser<int>
    {
        public Product Product { get; set; }
        public ICollection<UserRole> UserRoles { get; set; } = [];
    }
}
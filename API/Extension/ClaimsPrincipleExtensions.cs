using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace API.Extension
{
    public static class ClaimsPrincipleExtensions
    {
        public static int GetUserId(this ClaimsPrincipal user)
        {
            var username = int.Parse(user.FindFirstValue(ClaimTypes.NameIdentifier) ?? throw new Exception("Não foi possivel achar o usuário pelo token"));

            return username;
        }
    }
}
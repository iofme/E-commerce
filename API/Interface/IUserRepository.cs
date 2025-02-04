using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Interface
{
    public interface IUserRepository
    {
        Task<IEnumerable<Users>> GetUsers();
        Task<Users?> GetUserById(int id);
        void UpdateUser(Users users);
        Task<bool> SaveAllAsync();
    }
}
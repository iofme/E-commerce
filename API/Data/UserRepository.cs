using API.Entities;
using API.Interface;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class UserRepository(DataContext context) : IUserRepository
    {
        public async Task<Users?> GetUserById(int id)
        {
            return await context.Users.Include(p => p.Product).FirstOrDefaultAsync(u => u.Id == id);
        }

        public async Task<IEnumerable<Users>> GetUsers()
        {
            return await context.Users.Include(p => p.Product).ToListAsync();
        }

        public async Task<bool> SaveAllAsync()
        {
            return await context.SaveChangesAsync() > 0;
        }

        public void UpdateUser(Users users)
        {
            context.Entry(users).State = EntityState.Modified;
        }
    }
}
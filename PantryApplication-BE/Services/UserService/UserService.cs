using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace PantryApplication_BE.Services.UserService
{
    public class UserService : IUserService
    {
        private readonly DataContext context;

        public UserService(DataContext context)
        {
            this.context = context;
        }

        public async Task<ActionResult<List<User>>> GetAllUsers()
        {
            return await this.context.Users.ToListAsync();
        }

        public async Task<ActionResult<List<User>>> GetUserById(int id)
        {
            return await this.context.Users.Where(u => u.Id == id).ToListAsync();
        }

        public async Task<ActionResult<List<User>>> AddUser(User user)
        {
            this.context.Users.Add(user);
            await this.context.SaveChangesAsync();
            return await GetAllUsers();
        }

        public async Task<ActionResult<User>> LoginUser(string email, string password)
        {
            foreach (var i in this.context.Users)
            {
                if (i.Email == email && i.Password == password)
                {
                    return await this.context.Users.FindAsync(i.Id);
                }
            }
            throw new Exception("User Not Found");

        }
    }
}

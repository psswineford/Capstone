using Microsoft.AspNetCore.Mvc;

namespace PantryApplication_BE.Services.UserService
{
    public interface IUserService
    {
        Task<List<User>> GetAllUsers();
        Task<List<User>> GetUserById(int id);
        Task<List<User>> AddUser(User user);

        Task<User> LoginUser(string email, string password);
    }
}

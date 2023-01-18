using Microsoft.AspNetCore.Mvc;

namespace PantryApplication_BE.Services.UserService
{
    public interface IUserService
    {
        Task<ActionResult<List<User>>> GetAllUsers();
        Task<ActionResult<List<User>>> GetUserById(int id);
        Task<ActionResult<List<User>>> AddUser(User user);

        Task<ActionResult<User>> LoginUser(string email, string password);
    }
}

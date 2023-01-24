using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PantryApplication_BE.Services.UserService;

namespace PantryApplication_BE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService userService;

        public UserController(IUserService userService)
        {
            this.userService = userService;
        }

        [HttpGet]
        public async Task<ActionResult<List<User>>> GetAllUsers()
        {
            return Ok(await userService.GetAllUsers());
        }

        [HttpGet("usernames")]
        public async Task<ActionResult<List<UserNamesDTO>>> GetAllUserNames()
        {
            return Ok(await userService.GetAllUserNames());
        }

        [HttpGet("id")]
        public async Task<ActionResult<List<User>>> GetUserById(int id)
        {
            return Ok(await userService.GetUserById(id));
        }

        [HttpPost]
        public async Task<ActionResult<List<User>>> AddUser(User user)
        {
            return Ok(await userService.AddUser(user));
        }

        [HttpGet("login")]
        public async Task<ActionResult<User>> LoginUser(string email, string password)
        {
            return Ok(await userService.LoginUser(email, password));
        }
    }
}

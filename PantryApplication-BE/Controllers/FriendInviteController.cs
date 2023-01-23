using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PantryApplication_BE.Services.FriendInviteService;
using PantryApplication_BE.Services.FriendService;
using PantryApplication_BE.Services.UserService;

namespace PantryApplication_BE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FriendInviteController : ControllerBase
    {
        private readonly IFriendInviteService inviteService;

        public FriendInviteController(IFriendInviteService inviteService)
        {
            this.inviteService = inviteService;
        }

        [HttpGet]
        public async Task<ActionResult<List<FriendInviteDTO>>> GetInvites(int id)
        {
            return Ok(await inviteService.GetFriendInvites(id));
        }

        [HttpPost]
        public async Task<ActionResult<List<FriendInviteDTO>>> AddFriendRequest(AddFriendDTO request)
        {
            return Ok(await inviteService.AddFriendRequest(request));
        }

    }
}

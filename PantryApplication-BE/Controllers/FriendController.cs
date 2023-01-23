using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PantryApplication_BE.Services.FriendService;
using PantryApplication_BE.Services.RecipeService;

namespace PantryApplication_BE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FriendController : ControllerBase
    {
        private readonly IFriendService friendService;

        public FriendController(IFriendService friendService)
        {
            this.friendService = friendService;
        }

        [HttpGet]
        public async Task<ActionResult<List<FriendListItemDTO>>> GetFriendsByUserID(int id)
        {
            return Ok(await friendService.GetFriendsByUserID(id));
        }

        [HttpPost]
        public async Task<ActionResult<List<FriendListItemDTO>>> AddFriend(AddFriendDTO request)
        {
            return Ok (await friendService.AddFriend(request));
        }
    }
}

using System.Threading.Tasks;

namespace PantryApplication_BE.Services.FriendService
{
    public interface IFriendService
    {
        Task<List<FriendListItemDTO>> GetFriendsByUserID(int id);
        Task<List<FriendListItemDTO>> AddFriend(AddFriendDTO request);

        Task<FriendUser> AddToFriendInviteTable(int friendId, int userId);
    }
}

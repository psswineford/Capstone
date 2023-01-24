namespace PantryApplication_BE.Services.FriendInviteService
{
    public interface IFriendInviteService
    {
        Task<List<FriendInviteDTO>> GetFriendInvites(int id);
        Task<List<FriendInviteDTO>> AddFriendRequest(AddFriendDTO request);
        Task<List<FriendInviteDTO>> DeleteFriendRequest(int userId);
    }
}

namespace PantryApplication_BE.Services.FriendService
{
    public interface IFriendService
    {
        Task<List<FriendListItemDTO>> GetFriendsByUserID(int id);
    }
}

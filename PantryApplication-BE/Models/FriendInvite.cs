namespace PantryApplication_BE.Models
{
    public class FriendInvite
    {
        public int Id { get; set; }
        public int FromFriendId { get; set; }
        public int ToUserId { get; set; }
        public Boolean SentInvite { get; set; } = false;
        
    }
}

namespace PantryApplication_BE.DTOs
{
    public class FriendInviteDTO
    { 
        public int InviteID { get; set; }
        public int FromFriendId { get; set; }
        public string FromFriendName { get; set; }
        public int ToUserId { get; set; }
        public Boolean SentInvite { get; set; } = false;
    }
}

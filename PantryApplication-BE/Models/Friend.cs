namespace PantryApplication_BE.Models
{
    public class Friend
    {
        public int Id { get; set; }
        public string FriendName { get; set; } = string.Empty;

        public int UserId { get; set; }
        public int FriendId { get; set;}
        public Boolean IsFriend { get; set; } = false;
        

    }
}

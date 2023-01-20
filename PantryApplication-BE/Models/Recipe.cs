namespace PantryApplication_BE.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Instructions { get; set; } = string.Empty;
        public string Ingredients { get; set; } = string.Empty;
        public int UserId { get; set; }
        public User? User { get; set; }
    }
}

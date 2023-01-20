namespace PantryApplication_BE.DTOs
{
    public class AddRecipeDTO
    {
        public string Name { get; set; } = string.Empty;
        public string Instructions { get; set; } = string.Empty;
        public string Ingredients { get; set; } = string.Empty;
        public int UserId { get; set; }
    }
}

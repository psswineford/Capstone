namespace PantryApplication_BE.DTOs
{
    public class AddPantryDTO
    { 
        public string Name { get; set; } = string.Empty;
        public decimal Weight { get; set; } = 0.0M;
        public int Calories { get; set; } = 0;
        public int Quantity { get; set; } = 0;
        public int UserId { get; set; }
    }
}

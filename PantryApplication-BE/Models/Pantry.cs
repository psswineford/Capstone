namespace PantryApplication_BE.Models
{
    public class Pantry
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Weight { get; set; } = 0;
        public int Calories { get; set; } = 0;

    }
}

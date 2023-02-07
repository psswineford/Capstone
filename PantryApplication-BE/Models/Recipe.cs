using System.Text.Json.Serialization;

namespace PantryApplication_BE.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Instructions { get; set; } = string.Empty;
        public string Ingredients { get; set; } = string.Empty;
        public string Ingredients2 { get; set; } = string.Empty;
        public string Ingredients3 { get; set; } = string.Empty;
        public string Ingredients4 { get; set; } = string.Empty;
        public string Ingredients5 { get; set; } = string.Empty;
        public int UserId { get; set; }
        public User? User { get; set; }    
        //public ICollection<Ingredients>? Ingredients { get; set; }
    }
}

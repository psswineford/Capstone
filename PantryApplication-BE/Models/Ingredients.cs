using System.Text.Json.Serialization;

namespace PantryApplication_BE.Models
{
    public class Ingredients
    {
        public int Id { get; set; }
        public string IngredientName { get; set; } = string.Empty;

        [JsonIgnore]
        public ICollection<Recipe>? Recipes { get; set; }

    }
}

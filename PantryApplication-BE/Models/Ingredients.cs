namespace PantryApplication_BE.Models
{
    public class Ingredients
    {
        public int Id { get; set; }
        public int RecipeId { get; set; }
        public string IngredientName { get; set; } = string.Empty;

    }
}

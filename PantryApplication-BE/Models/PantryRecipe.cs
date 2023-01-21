namespace PantryApplication_BE.Models
{
    public class PantryRecipe
    {
        public int Id { get; set; }
        public int PantriesId { get; set; }
        public int RecipesId { get; set; }

    }
}

namespace PantryApplication_BE.DTOs
{
    public class RecipeContentsDTO
    {
        public string Name { get; set; } = string.Empty;
        public string Instructions { get; set; } = string.Empty;
        public List<RecipeItemDTO> RecipeItems { get; set; }

    }
}

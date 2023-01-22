namespace PantryApplication_BE.Services.RecipeService
{
    public interface IRecipeService
    {
        Task<List<Recipe>> GetAllRecipes();
        Task<List<Recipe>> GetRecipeById(int id);
        Task<List<Recipe>> AddRecipe(Recipe recipe);
        Task<List<Recipe>> DeleteRecipeById(int id);
        Task<RecipeContentsDTO> GetRecipeLinkById(int id);
        Task<List<RecipeItemDTO>> GetRecipeItemsById(int id);
    }
}

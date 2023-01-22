using Microsoft.EntityFrameworkCore;
using PantryApplication_BE.Models;
using System.Collections.Immutable;

namespace PantryApplication_BE.Services.RecipeService
{
    public class RecipeService : IRecipeService
    {
        private readonly DataContext context;

        public RecipeService(DataContext context)
        {
            this.context = context;
        }

        public async Task<List<Recipe>> GetAllRecipes()
        {
            var recipeItems = await this.context.Recipes.ToListAsync();
            return recipeItems;
        }

        public async Task<List<Recipe>> GetRecipeById(int id)
        {
            var recipeItems = await this.context.Recipes
               .Where(p => p.User.Id == id)
               .ToListAsync();

            return recipeItems;
        }
        public async Task<List<Recipe>> AddRecipe(Recipe recipe)
        {
            this.context.Recipes.Add(recipe);
            await this.context.SaveChangesAsync();
            return await GetAllRecipes();
        }

        public async Task<List<Recipe>> DeleteRecipeById(int id)
        {
            var recipeItems = await this.context.Recipes.FirstOrDefaultAsync(p => p.Id == id);
            this.context?.Recipes.Remove(recipeItems);
            await this.context.SaveChangesAsync();
            return await GetAllRecipes();
        }

        public async Task<RecipeContentsDTO> GetRecipeLinkById(int id)
        {
            var ingredientQuery = await (from r in this.context.Recipes
                        join rp in this.context.PantriesRecipes on r.Id equals rp.RecipesId
                        join p in this.context.Pantries on rp.PantriesId equals p.Id
                        where r.Id == id
                        select new RecipeItemDTO
                        {
                            IngredientName = p.Name,
                        }).ToListAsync();

            var recipeQuery = from r in this.context.Recipes
                              where r.Id == id
                              select r;

            var recipeItem = recipeQuery.FirstOrDefault();

            RecipeContentsDTO rContents = new RecipeContentsDTO
            {
                Name = recipeItem.Name,
                Instructions = recipeItem.Instructions,
                RecipeItems= ingredientQuery,
            };

            return rContents;
        }

        public async Task<List<RecipeItemDTO>> GetRecipeItemsById(int id)
        {
            var ingredientQuery = await (from r in this.context.Recipes
                                         join rp in this.context.PantriesRecipes on r.Id equals rp.RecipesId
                                         join p in this.context.Pantries on rp.PantriesId equals p.Id
                                         where r.Id == id
                                         select new RecipeItemDTO
                                         {
                                             IngredientName = p.Name,
                                         }).ToListAsync();

        
            return ingredientQuery;
        }
    }
}

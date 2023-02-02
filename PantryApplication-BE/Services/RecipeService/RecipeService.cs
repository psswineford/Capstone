using Microsoft.EntityFrameworkCore;
using PantryApplication_BE.DTOs;
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
            var recipeItems = await this.context.Recipes
            .Include(r => r.Ingredients)
            .ToListAsync();
            return recipeItems;
        }

        public async Task<List<Recipe>> GetRecipeById(int id)
        {
            var recipeItems = await this.context.Recipes
               .Where(p => p.User.Id == id)
               .Include(r => r.Ingredients)
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

     

   
    }
}

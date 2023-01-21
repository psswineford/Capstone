using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PantryApplication_BE.Services.RecipeService;

namespace PantryApplication_BE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        private readonly IRecipeService recipeService;

        public RecipeController(IRecipeService recipeService)
        {
            this.recipeService = recipeService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Recipe>>> GetAllRecipes()

        {
            var response = await recipeService.GetAllRecipes();
            if (response == null)
            {
                return BadRequest("No Items in your Pantry");
            }
            return Ok(response);

        }

        [HttpGet("id")]
        public async Task<ActionResult<List<Recipe>>> GetRecipeById(int id)
        {
            return Ok(await recipeService.GetRecipeById(id));
        }

        [HttpPost]
        public async Task<ActionResult<List<Recipe>>> AddRecipe(Recipe recipe)
        {
            return Ok(await recipeService.AddRecipe(recipe));
        }

        [HttpDelete("id")]
        public async Task<ActionResult<List<Recipe>>> DeleteRecipeById(int id)
        {
            return Ok(await recipeService.DeleteRecipeById(id));
        }

        [HttpGet("recipeitems")]

        public async Task<ActionResult<List<RecipeContentsDTO>>> GetRecipeItems(int id)
        {
            return Ok(await recipeService.GetRecipeLinkById(id));
        }

    }
}

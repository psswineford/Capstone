using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PantryApplication_BE.Services.PantryService;

namespace PantryApplication_BE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PantryController : ControllerBase
    {
        private readonly IPantryService pantryService;

        public PantryController(IPantryService pantryService)
        {
            this.pantryService = pantryService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Pantry>>> GetAllPantries()
        {
            return Ok(await pantryService.GetAllPantries());
        }

        [HttpGet("id")]
        public async Task<ActionResult<List<Pantry>>> GetPantryById(int id)
        {
            return Ok(await pantryService.GetPantryById(id));
        }

        [HttpPost]
        public async Task<ActionResult<List<Pantry>>> AddPantry(Pantry pantry)
        {
          return Ok(await pantryService.AddPantry(pantry));
        }
    }
}

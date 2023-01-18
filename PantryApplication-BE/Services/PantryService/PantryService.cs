using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace PantryApplication_BE.Services.PantryService
{
    public class PantryService : IPantryService
    {
        private readonly DataContext context;

        public PantryService(DataContext context)
        {
            this.context = context;
        }

        public async Task<ActionResult<List<Pantry>>> GetAllPantries()
        {
            return await this.context.Pantries.ToListAsync();
        }

        public async Task<ActionResult<List<Pantry>>> GetPantryById(int id)
        {
            return await this.context.Pantries.Where(p => p.Id == id).ToListAsync();
        }

        public async Task<ActionResult<List<Pantry>>> AddPantry(Pantry pantry)
        {
            this.context.Pantries.Add(pantry);
            await this.context.SaveChangesAsync();
            return await GetAllPantries();
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PantryApplication_BE.DTOs;

namespace PantryApplication_BE.Services.PantryService
{
    public class PantryService : IPantryService
    {
        private readonly DataContext context;

        public PantryService(DataContext context)
        {
            this.context = context;
        }

        public async Task<List<Pantry>> GetAllPantries()
        {
            var pantryItems = await this.context.Pantries.ToListAsync();
            return pantryItems;
        }

        public async Task<List<Pantry>> GetPantryById(int id)
        {
            var pantryItems = await this.context.Pantries
                .Where(p => p.User.Id == id)
                .ToListAsync();
            
            return pantryItems;
                
        }

        public async Task<ActionResult<List<Pantry>>> AddPantry(Pantry pantry)
        {
            this.context.Pantries.Add(pantry);
            await this.context.SaveChangesAsync();
            return await GetAllPantries();
        }

        public async Task<List<Pantry>> DeletePantryById(int id)
        {
            var pantryItems = await this.context.Pantries.FirstOrDefaultAsync(p => p.Id == id);
            this.context?.Pantries.Remove(pantryItems);
            await this.context.SaveChangesAsync();
            return await GetAllPantries();
        }

        public async Task<List<Pantry>> UpdatePantry(Pantry updatePantry)
        {
            var pantryItem = await this.context.Pantries.FirstOrDefaultAsync(p => p.Id == updatePantry.Id);

            pantryItem.Name = updatePantry.Name;
            pantryItem.Weight= updatePantry.Weight;
            pantryItem.Calories= updatePantry.Calories;
            pantryItem.Quantity= updatePantry.Quantity;
            pantryItem.UserId = updatePantry.UserId;

            await this.context.SaveChangesAsync();
            return await GetAllPantries();
        }

        
    }
}

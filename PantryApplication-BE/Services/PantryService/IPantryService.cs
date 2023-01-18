using Microsoft.AspNetCore.Mvc;

namespace PantryApplication_BE.Services.PantryService
{
    public interface IPantryService
    {
        Task<List<Pantry>> GetAllPantries();
        Task<ActionResult<List<Pantry>>> GetPantryById(int id);
        Task<ActionResult<List<Pantry>>> AddPantry(Pantry pantry);
    }
}

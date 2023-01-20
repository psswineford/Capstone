using Microsoft.AspNetCore.Mvc;
using PantryApplication_BE.DTOs;

namespace PantryApplication_BE.Services.PantryService
{
    public interface IPantryService
    {
        Task<List<Pantry>> GetAllPantries();
        Task<List<Pantry>> GetPantryById(int id);
        Task<ActionResult<List<Pantry>>> AddPantry(Pantry pantry);
        Task<List<Pantry>> DeletePantryById(int id);
        Task<List<Pantry>> UpdatePantry(Pantry updatePantry);
    }
}

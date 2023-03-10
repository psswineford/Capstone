namespace PantryApplication_BE.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public List<Pantry>? Pantries { get; set; }
        public List<Recipe>? Recipes { get; set; }
        public List<Friend>? Friends { get; set;}

    }
}

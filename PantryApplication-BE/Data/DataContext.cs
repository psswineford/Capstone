using Microsoft.EntityFrameworkCore;
using PantryApplication_BE.Models;

namespace PantryApplication_BE.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Pantry> Pantries { get; set; } 

    }
}

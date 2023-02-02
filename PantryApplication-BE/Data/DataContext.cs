using Microsoft.EntityFrameworkCore;
using PantryApplication_BE.Models;

namespace PantryApplication_BE.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Pantry> Pantries { get; set; } 
        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<Friend> Friends { get; set; }
        public DbSet<FriendUser> FriendUsers { get; set; }
        public DbSet<FriendInvite> FriendInvites { get; set;}

        public DbSet<Ingredients> Ingredients { get; set;}

    }
}

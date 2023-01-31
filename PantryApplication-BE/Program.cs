global using PantryApplication_BE.Data;
global using PantryApplication_BE.Models;
global using PantryApplication_BE.DTOs;
using Microsoft.EntityFrameworkCore;
using PantryApplication_BE.Services.PantryService;
using PantryApplication_BE.Services.RecipeService;
using PantryApplication_BE.Services.UserService;
using PantryApplication_BE.Services.FriendService;
using PantryApplication_BE.Services.FriendInviteService;

var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<DataContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                      });
});


builder.Services.AddTransient<IUserService, UserService>();
builder.Services.AddTransient<IPantryService, PantryService>();
builder.Services.AddTransient<IRecipeService, RecipeService>();
builder.Services.AddTransient<IFriendService, FriendService>();
builder.Services.AddTransient<IFriendInviteService, FriendInviteService>();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(MyAllowSpecificOrigins);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
//test push
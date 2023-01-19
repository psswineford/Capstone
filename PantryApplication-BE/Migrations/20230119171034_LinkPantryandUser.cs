using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PantryApplication_BE.Migrations
{
    public partial class LinkPantryandUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Pantries",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Pantries_UserId",
                table: "Pantries",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Pantries_Users_UserId",
                table: "Pantries",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pantries_Users_UserId",
                table: "Pantries");

            migrationBuilder.DropIndex(
                name: "IX_Pantries_UserId",
                table: "Pantries");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Pantries");
        }
    }
}

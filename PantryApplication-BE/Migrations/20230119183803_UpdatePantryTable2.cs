using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PantryApplication_BE.Migrations
{
    public partial class UpdatePantryTable2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pantries_Users_UserId",
                table: "Pantries");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Pantries",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Pantries_Users_UserId",
                table: "Pantries",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pantries_Users_UserId",
                table: "Pantries");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Pantries",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Pantries_Users_UserId",
                table: "Pantries",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}

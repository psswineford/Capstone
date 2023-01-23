using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PantryApplication_BE.Migrations
{
    public partial class updateFriendtable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "FriendId",
                table: "Friends",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FriendId",
                table: "Friends");
        }
    }
}

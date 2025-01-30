using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class AjustandoFeedback : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FeedBackUsers_Products_ProductId",
                table: "FeedBackUsers");

            migrationBuilder.DropIndex(
                name: "IX_FeedBackUsers_ProductId",
                table: "FeedBackUsers");

            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "FeedBackUsers");

            migrationBuilder.AddColumn<string>(
                name: "FeedBack",
                table: "Products",
                type: "TEXT",
                nullable: false,
                defaultValue: "[]");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FeedBack",
                table: "Products");

            migrationBuilder.AddColumn<int>(
                name: "ProductId",
                table: "FeedBackUsers",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_FeedBackUsers_ProductId",
                table: "FeedBackUsers",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_FeedBackUsers_Products_ProductId",
                table: "FeedBackUsers",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id");
        }
    }
}

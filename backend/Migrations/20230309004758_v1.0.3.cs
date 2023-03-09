using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class v103 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Students_Careers_CareerId",
                table: "Students");

            migrationBuilder.AddForeignKey(
                name: "FK_Students_Careers_CareerId",
                table: "Students",
                column: "CareerId",
                principalTable: "Careers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Students_Careers_CareerId",
                table: "Students");

            migrationBuilder.AddForeignKey(
                name: "FK_Students_Careers_CareerId",
                table: "Students",
                column: "CareerId",
                principalTable: "Careers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}

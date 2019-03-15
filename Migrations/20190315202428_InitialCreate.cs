using Microsoft.EntityFrameworkCore.Migrations;

namespace update_dotnet_redux_proj.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Children",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    childName = table.Column<string>(nullable: true),
                    factoryId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Children", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Factories",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    factoryName = table.Column<string>(nullable: true),
                    Factoryid = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Factories", x => x.id);
                    table.ForeignKey(
                        name: "FK_Factories_Factories_Factoryid",
                        column: x => x.Factoryid,
                        principalTable: "Factories",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Factories_Factoryid",
                table: "Factories",
                column: "Factoryid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Children");

            migrationBuilder.DropTable(
                name: "Factories");
        }
    }
}

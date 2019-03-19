using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace update_dotnet_redux_proj.SQLite
{
    public class FactoryContext : DbContext
    {
        public DbSet<Child> Children { get; set; }
        public DbSet<Factory> Factories { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=factory.db");
        }
    }

    public class Factory
    {
        public int id { get; set; }
        public string factoryName { get; set; }


    }

    public class Child
    {
        public int id { get; set; }
        public string childName { get; set; }

        public int factoryId { get; set; }
    }
}
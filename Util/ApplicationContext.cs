using Microsoft.EntityFrameworkCore;
using shop.Models;

namespace shop.Util
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Good> Goods { get; set; } 

        public ApplicationContext()
        {
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //optionsBuilder.UseMySQL("server=localhost;user=root;password=rootroot;database=chemex;");
            optionsBuilder.UseMySQL("server=localhost;user=root;password=root;database=candyShop;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            List<Good> goods = new List<Good>();
            for (int i = 1; i <= 10; i++)
            {
                Good newGood = new Good() { Id = i, Name = $"testGood{i}", Cost = i * 100 };
                goods.Add(newGood);
            }
            modelBuilder.Entity<Good>().HasData(goods);
        }
    }
}

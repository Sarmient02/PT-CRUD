using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend
{
    public class ApplicationDbContext: DbContext
    {
        public DbSet<Student> Students { get; set; }
        public DbSet<Career> Careers { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
        {

        }

    }
}

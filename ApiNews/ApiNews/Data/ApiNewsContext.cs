using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ApiNews.Models;

namespace ApiNews.Data
{
    public class ApiNewsContext : DbContext
    {
        public ApiNewsContext (DbContextOptions<ApiNewsContext> options)
            : base(options)
        {
        }

        public DbSet<ApiNews.Models.News> News { get; set; }
    }
}

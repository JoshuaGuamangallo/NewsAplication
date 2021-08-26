using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiNews.Models
{
    public class News
    {
        public int id { get; set; }
        public string title { get; set; }
        public string description { get; set;}
        public string image { get; set; }
    }
}

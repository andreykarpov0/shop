using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace shop.Models
{
    public class Good
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }
        public int Cost { get; set; }
    }
}

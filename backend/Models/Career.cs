using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Career
    {

        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public int Code { get; set; }

        [InverseProperty("Career")]
        public ICollection<Student> Students { get; set; }

    }
}

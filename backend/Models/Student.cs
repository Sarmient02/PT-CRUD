using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Student
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Phone { get; set; }

        [ForeignKey("Career")]
        public int CareerId { get; set; }

        public Career Career { get; set; }

        [Required]
        public DateTime Birthdate { get; set; }
    }
}

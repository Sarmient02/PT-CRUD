using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using System.Text.Json;
using backend.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public StudentsController(ApplicationDbContext context)
        {
            _context = context;
        }

        public class StudentInputModel
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string Email { get; set; }
            public string Phone { get; set; }
            public int CareerId { get; set; }

            public DateTime Birthdate { get; set; }
        }

        // GET: api/<EstudiantesController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listStudents = await _context.Students
                                                    .ToListAsync();
                return Ok(listStudents);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/<EstudiantesController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var student = await _context.Students.FindAsync(id);
                if (student == null)
                {
                    return NotFound();
                }
                return Ok(student);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST api/<EstudiantesController>
        [HttpPost]
        public async Task<ActionResult<Student>> PostStudent(StudentInputModel model)
        {
            try
            {
                var student = new Student
                {
                    Name = model.Name,
                    Email = model.Email,
                    Phone = model.Phone,
                    CareerId = model.CareerId,
                    Birthdate = model.Birthdate
                };

                _context.Students.Add(student);
                await _context.SaveChangesAsync();

                return Ok(student);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<EstudiantesController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] StudentInputModel model)
        {
            try
            {
                if(id != model.Id)
                {
                    return NotFound();
                }

                var student = new Student
                {
                    Id = model.Id,
                    Name = model.Name,
                    Email = model.Email,
                    Phone = model.Phone,
                    CareerId = model.CareerId,
                    Birthdate = model.Birthdate
                };

                _context.Update(student);
                await _context.SaveChangesAsync();
                return Ok(new {message= "El estudiante fue actualizado con éxito"});

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<EstudiantesController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var student = await _context.Students.FindAsync(id);
                if (student == null)
                {
                    return NotFound();
                }
                _context.Students.Remove(student);
                await _context.SaveChangesAsync();
                return Ok(new { message = "El estudiante fue eliminado con éxito" });

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}

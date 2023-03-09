using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using static backend.Controllers.StudentsController;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CareersController : ControllerBase
    {

        private readonly ApplicationDbContext _context;

        public class CareersInputModel
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public int Code { get; set; }

        }

        public CareersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/<CareersController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listCareers = await _context.Careers
                                                    .ToListAsync();
                return Ok(listCareers);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/<CareersController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var career = await _context.Careers.FindAsync(id);
                if (career == null)
                {
                    return NotFound();
                }
                return Ok(career);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST api/<CareersController>
        [HttpPost]
        public async Task<ActionResult<Career>> PostCareer(CareersInputModel model)
        {
            try
            {
                var career = new Career
                {
                    Name = model.Name
                };

                _context.Careers.Add(career);
                await _context.SaveChangesAsync();

                return Ok(career);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<CareersController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] CareersInputModel model)
        {
            try
            {
                if (id != model.Id)
                {
                    return NotFound();
                }

                var career = new Career
                {
                    Id = model.Id,
                    Name = model.Name,
                    Code = model.Code
                };

                _context.Update(career);
                await _context.SaveChangesAsync();
                return Ok(new { message = "La carrera fue actualizado con éxito" });

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<CareersController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var career = await _context.Careers.FindAsync(id);
                if (career == null)
                {
                    return NotFound();
                }
                _context.Careers.Remove(career);
                await _context.SaveChangesAsync();
                return Ok(new { message = "La carrera fue eliminado con éxito" });

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}

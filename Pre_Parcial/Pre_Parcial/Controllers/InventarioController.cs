using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data.SqlClient;
using Pre_Parcial.Interfaz;
using Pre_Parcial.Modelos;
using System.Threading.Tasks;

namespace Pre_Parcial.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class InventarioController : ControllerBase
    {
        private readonly IConfiguration _config;

        private readonly IServicioDeInventario _servicioDeInventario;

        public InventarioController(IConfiguration config, IServicioDeInventario servicioDeInventario)
        {
            _config = config;
            _servicioDeInventario = servicioDeInventario;
        }

        [HttpGet("ObtenerTodos")]
        public ActionResult<IEnumerable<Inventario>> ObtenerTodos()
        {
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            var inventarios = _servicioDeInventario.ObtenerTodos(connection);
            return Ok(inventarios);
        }

         [HttpPut("ActualizarProducto")]
        public ActionResult Actualizar([FromBody] Inventario modelo)
        {
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            var resultado = _servicioDeInventario.ActualizarProducto(connection, modelo);
            if (resultado == 0)
                return NotFound();

            return Ok(resultado);


        }

        [HttpDelete("EliminarProducto")]
        public async Task<ActionResult<List<Inventario>>> EliminarProducto([FromBody] Inventario id_producto)
        {
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            var resultado = _servicioDeInventario.EliminarProducto(connection, id_producto);
            if (resultado == 0)
                return NotFound();
            return Ok(resultado);
        }
    }

}

using Pre_Parcial.Modelos;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace Pre_Parcial.Interfaz
{
    public interface IServicioDeInventario
    {
        public IEnumerable<Inventario> ObtenerTodos(SqlConnection connection);

        public int ActualizarProducto(SqlConnection connection, Inventario modelo);

        public int EliminarProducto(SqlConnection connection, Inventario id_producto);

    }
}

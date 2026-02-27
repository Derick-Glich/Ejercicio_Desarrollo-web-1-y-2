using Pre_Parcial.Interfaz;
using Pre_Parcial.Modelos;
using System.Data.SqlClient;
using System.Collections.Generic;
using Dapper;
using System;
using System.Reflection;

namespace Pre_Parcial.Servicios
{
    public class ServicioInventario : IServicioDeInventario
    {
        public int ActualizarProducto(SqlConnection connection, Inventario modelo)
        {
            try
            {
                var resultado = connection.Execute(
                    "UPDATE INVENTARIO SET " +
                    "nombre_sh = '" + modelo.nombre_sh + "', " +
                    "descripcion = '" + modelo.descripcion + "', " +
                    "precio = " + modelo.precio + ", " +
                    "stock = " + modelo.stock +
                    " WHERE id_producto = " + modelo.id_producto
                );

                connection.Close();
                return resultado;
            }
            catch (Exception)
            {
                return 0;
            }
        }

   

        public int EliminarProducto(SqlConnection connection, Inventario id_producto)
        {
            try
            {
                var resultados = connection.Execute("DELETE FROM INVENTARIO WHERE id_producto = " + id_producto.id_producto);
                connection.Close();
                return 1;
            }
            catch (Exception e)
            {
                return 0;
            }
        }

        public IEnumerable<Inventario> ObtenerTodos(SqlConnection connection)
        {
            var resultado = connection.QueryAsync<Inventario>("SELECT * FROM INVENTARIO");
            return resultado.Result;
        }
    }
}

//using Microsoft.VisualBasic;
//using System;
//using System.Runtime.InteropServices;

using System;

namespace Pre_Parcial.Modelos
{
    public class Inventario
    {
        public int id_producto { get; set; }
        public string nombre_sh { get; set; }
        public string descripcion { get; set; }
        public decimal precio { get; set; }
        public int stock { get; set; }
        public DateTime fechaCreacion { get; set; }
 
    }
}

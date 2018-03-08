using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBase.Service.BaseDao
{
    public interface IDatabaseContextManager
    {
        SqlConnection GetConnection();
        //IDatabaseContext GetContext();
    }
    public class DatabaseContextManager
    {
    }
}

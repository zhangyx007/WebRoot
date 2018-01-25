using DataBase.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBase.Service
{
    public interface IBusinessDao
    {
        List<Buiness> GetList();
    }
}

using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBase.Service.Model
{
    public interface IDatabaseContext:IDisposable
    {

    }

    public interface IDatabaseModelContext : IDatabaseContext
    {
        ObjectContext ObjectContext { get; }
    }
}

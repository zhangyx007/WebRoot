using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects.DataClasses;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBase.Service.DaoCore
{
    public interface IQueryBehavior<TDomain,TEntity> where TEntity:class, IEntityWithKey,new() where TDomain:class
    {

    }
}

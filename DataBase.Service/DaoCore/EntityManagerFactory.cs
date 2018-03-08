using DataBase.Service.EntityManager;
using DataBase.Service.EntityManager.EntityManager;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Core.Objects.DataClasses;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBase.Service.DaoCore
{
    internal class EntityManagerFactory
    {
        public static IEntityManager<T> Create<T>(ObjectContext context) where T : class,IEntityWithKey, new()
        {
            return new EntityManager<T>(context);
        }
    }
}

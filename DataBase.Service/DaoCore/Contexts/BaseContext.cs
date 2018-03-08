using DataBase.Service.EntityManager;
using DataBase.Service.Model;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects.DataClasses;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBase.Service.DaoCore.Contexts
{
    public abstract class BaseContext<TDomain,TEntity>: IQueryBehavior<TDomain, TEntity> where TDomain :class
        where TEntity:class, IEntityWithKey,new()
    {
        protected BaseContext(IDatabaseModelContext context)
        {
            databaseContext = context;
            entityManager = EntityManagerFactory.Create<TEntity>(databaseContext.ObjectContext);
        }

        private IEntityManager<TEntity> entityManager;
        private IDatabaseModelContext databaseContext;

        protected IEntityManager<TEntity> EntityManager
        {
            get { return entityManager; }
        }
    }
}

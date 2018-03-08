using System;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Core.Objects.DataClasses;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBase.Service.EntityManager
{
    public interface IEntityManager<T> where T:class, IEntityWithKey,new()
    {
        void Create(T entity);
        void Delete(T entity);
        T Load(IEnumerable<EntityKeyMember> keyMembers);
        ObjectQuery<T> ObjectQuery { get; }
        string EntitySetName { get; }
        ObjectQuery<TResult> CreateQuery<TResult>(string queryString, params ObjectParameter[] parameters);
        void Attach(ref T entityWithKey);
    }
}

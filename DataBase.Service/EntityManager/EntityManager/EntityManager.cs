using DataBase.Service.DaoCore.Util;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.Data.Entity.Core.Metadata.Edm;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Core.Objects.DataClasses;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBase.Service.EntityManager.EntityManager
{
    internal class EntityManager<T> : IEntityManager<T> where T : class, IEntityWithKey, new()
    {
        public EntityManager(ObjectContext context)
        {
            objectContext = context;
            FillEntityName();
        }

        private ObjectContext objectContext;
        private static string entitySetName;
        private ObjectQuery<T> objectQuery;

        public string EntitySetName
        {
            get
            {
                return entitySetName;
            }
        }

        private void FillEntityName()
        {
            if (string.IsNullOrEmpty(entitySetName))
            {
                EntityContainer container = objectContext.MetadataWorkspace.GetEntityContainer(objectContext.DefaultContainerName, DataSpace.CSpace);

                string setName = (from meta in container.BaseEntitySets where meta.ElementType.Name.Equals(typeof(T).Name) select meta.Name).FirstOrDefault();

                entitySetName = setName;
            }
        }

        public void Create(T entity)
        {
            objectContext.AddObject(entitySetName,entity);
        }

        public void Delete(T entity)
        {
            objectContext.DeleteObject(entity);
        }

        public T Load(IEnumerable<EntityKeyMember> keyMembers)
        {
            ObjectParameter[] parameters;
            string query = QueryUtil.BuildKeyQuery(keyMembers, out parameters);

            return ObjectQuery.Where(query,parameters).FirstOrDefault();
        }

        public ObjectQuery<T> ObjectQuery
        {
            get
            {
                if (objectQuery == null)
                {
                    objectQuery = CreateObjectQuery();
                }
                return objectQuery;
            }
        }

        public ObjectQuery<TResult> CreateQuery<TResult>(string queryString, params ObjectParameter[] parameters)
        {
            return objectContext.CreateQuery<TResult>(queryString, parameters);
        }

        private ObjectQuery<T> CreateObjectQuery()
        {
            return CreateQuery<T>(string.Format("[{0}]", entitySetName));
        }

        public void Attach(ref T entityWithKey)
        {
            entityWithKey.EntityKey = objectContext.CreateEntityKey(typeof(T).Name, entityWithKey);
            object entityRef = entityWithKey;
            if (objectContext.TryGetObjectByKey(entityWithKey.EntityKey, out entityRef))
            {
                entityWithKey = (T)entityRef;
            }
            else
            {
                objectContext.Attach(entityWithKey);
            }
        }
    }
}

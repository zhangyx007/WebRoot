using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects.DataClasses;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace DataBase.Service.DaoCore.Contexts
{
    //public abstract class SingleKeyEntityContext<TDomain, TEntity, TKey> : AuthorisedQueryContext<TDomain, TEntity>,
    //    ISingleKeyEntityContext<TDomain, TKey>
    //    where TDomain : class
    //    where TEntity : class, IEntityWithKey, new()
    //{
        

    //    protected SingleKeyEntityContext(
    //        IDatabaseModelContext context,
    //        string keyName = CoreConstants.KEY_NAME_ID)
    //        : base(context)
    //    {
    //        this.keyName = keyName;
    //    }

    //    private readonly string keyName;

    //    protected string KeyName
    //    {
    //        get
    //        {
    //            return keyName;
    //        }
    //    }

    //    public virtual TKey Create(TDomain obj)
    //    {
    //        TEntity entity = InternalCreate(obj);
    //        return (TKey)BindUtil.Extract(entity).First().Value;
    //    }

    //    public virtual void Update(TDomain obj)
    //    {
    //        InternalUpdate(obj);
    //    }

    //    public virtual void UpdateWithoutOjectInfo(TDomain obj)
    //    {
    //        InternalUpdate(obj);
    //    }

    //    //只是调用Delete(TKey)，不需要子类重写两遍方法
    //    public virtual void Delete(TDomain obj)
    //    {
    //        var keyMembers = BindUtil.Extract(obj);
    //        Delete((TKey)keyMembers.First().Value);
    //    }

    //    public virtual TDomain Load(TKey key)
    //    {
    //        ThrowUtil.ThrowIfNull(key, "key");
    //        return InternalLoad(new[] { ConvertToKeyMember(key) });
    //    }

    //    private EntityKeyMember ConvertToKeyMember(TKey key)//返回KEY=主键名称，value=值的对象
    //    {
    //        return new EntityKeyMember(this.keyName, key);
    //    }

    //    public virtual List<TDomain> GetAll()
    //    {
    //        List<TEntity> list = EntityManager.ObjectQuery.ToList();
    //        return AssembleList(list);
    //    }

    //    public virtual void Delete(TKey key)
    //    {
    //        ThrowUtil.ThrowIfNull(key, "key");
    //        var keys = new List<object> { key };
    //        SqlDelete(keys);
    //    }

    //    public virtual void Delete(IEnumerable<TKey> keys)
    //    {
    //        ThrowUtil.ThrowIfNull(keys, "keys");

    //        SqlDelete(keys.ToList());
    //    }

    //    protected void SqlDelete(List<TKey> keyMembers)
    //    {
    //        if (keyMembers.Count == 0)
    //        {
    //            return;
    //        }
    //        var id1 = keyMembers[0];
    //        var idVal = 0;
    //        if (Int32.TryParse(Convert.ToString(id1), out idVal))
    //        {
    //            SqlDelete<int>(keyMembers.Select(k => Convert.ToInt32(k)).ToList());
    //        }
    //        else
    //        {
    //            SqlDelete<string>(keyMembers.Select(k => Convert.ToString(k)).ToList());
    //        }
    //    }

    //    private void SqlDelete<T>(List<T> ids)
    //    {
    //        var entityName = EntityManager.EntitySetName;
    //        Util.BatchOperation(ids, subIds =>
    //        {
    //            List<SqlParameter> idParams = null;
    //            var inClause = DatabaseUtility.BuildInClause<T>(subIds.ToList(), out idParams);
    //            var deleteSql = string.Format("Delete [{0}] where {1} in {2}", entityName, keyName, inClause);
    //            DatabaseContext.ExecuteNonQuery(deleteSql, idParams.ToArray());
    //        });
    //    }

    //    /// <summary>
    //    /// AddList时不将List中的Domain对象添加到相对应的数据库表中， 只添加Alliance表
    //    /// </summary>
    //    protected void AddList<TAlliance>(
    //        TKey key,
    //        IEnumerable<TAlliance> domainList,
    //        int allianceType)
    //        where TAlliance : class
    //    {
    //        AddNormalOrRefList(key, domainList, allianceType, ReferenceEntry.Positive);
    //    }

    //    protected void AddReferenceList<TAlliance>(
    //        TKey key,
    //        IEnumerable<TAlliance> domainList,
    //        int allianceType)
    //        where TAlliance : class
    //    {
    //        AddNormalOrRefList(key, domainList, allianceType, ReferenceEntry.Negative);
    //    }

    //    private void AddNormalOrRefList<TAlliance>(
    //        TKey parentKey,
    //        IEnumerable<TAlliance> childrenList,
    //        int allianceType,
    //        ReferenceEntry entry
    //        )
    //        where TAlliance : class
    //    {
    //        if (childrenList == null)
    //        {
    //            return;
    //        }
    //        foreach (TAlliance item in childrenList)
    //        {
    //            object itemKey = BindUtil.Extract(item).First().Value;//得主键的值
    //            DAlliance alliance =
    //                entry.CreateAlliance(parentKey.ToString(), itemKey.ToString(), allianceType);
    //            DatabaseContext.Alliances.Create(alliance);
    //        }
    //    }

    //    /// <summary>
    //    /// AddList时将List中的Domain对象也添加到相对应的数据库表中
    //    /// </summary>
    //    protected void CascadeAddList<TAlliance, TAllianceKey>(//TKey主键类型  级联
    //        TKey parentKey,
    //        IEnumerable<TAlliance> childrenList,
    //        int allianceType,
    //        ISingleKeyEntityContext<TAlliance, TAllianceKey> context
    //        )
    //        where TAlliance : class
    //    {
    //        if (childrenList == null)
    //        {
    //            return;
    //        }
    //        foreach (TAlliance domain in childrenList)
    //        {
    //            TAllianceKey allianceId = context.Create(domain);
    //            DAlliance alliance =
    //                AllianceHelper.CreateAlliance(parentKey.ToString(), allianceId.ToString(), allianceType);

    //            DatabaseContext.Alliances.Create(alliance);
    //        }
    //    }

    //    /// <summary>
    //    /// 更新List 不会更新List中元素的内容。只会操作主表和Alliance表   非级联
    //    /// </summary>
    //    protected void UpdateList<TAlliance>(
    //        TKey key,
    //        IEnumerable<TAlliance> domains,
    //        int allianceType)
    //        where TAlliance : class
    //    {
    //        UpdateNormalOrRefList(key, domains, allianceType, ReferenceEntry.Positive);
    //    }

    //    protected void UpdateReferenceList<TAlliance>(
    //        TKey key,
    //        IEnumerable<TAlliance> domains,
    //        int allianceType)
    //        where TAlliance : class
    //    {
    //        UpdateNormalOrRefList(key, domains, allianceType, ReferenceEntry.Negative);
    //    }

    //    private void UpdateNormalOrRefList<TAlliance>(
    //        TKey parentId,
    //        IEnumerable<TAlliance> children,
    //        int allianceType,
    //        ReferenceEntry entry
    //        ) where TAlliance : class
    //    {
    //        if (children == null)
    //        {
    //            children = new List<TAlliance>();
    //        }
    //        List<DAlliance> allianceList =
    //            DatabaseContext.Alliances.QueryForList(
    //                entry.QuerySrcKey(parentId.ToString(),
    //                allianceType));

    //        List<string> allianceKeyList =
    //            allianceList.Select<DAlliance, string>(entry.AllianceKeyProperty).ToList();//取KEY的列表

    //        List<string> childrenId =
    //            children.Select<TAlliance, string>(t =>
    //                BindUtil.Extract(t).First().Value.ToString()).ToList();//将这句话视为取Id   BindUtil.Extract(t).First().Value.ToString()

    //        List<string> addIdList, deleteIdList, updateIdList;

    //        EnsureUpdateList(allianceKeyList,
    //            childrenId,
    //            out deleteIdList,
    //            out addIdList,
    //            out updateIdList);

    //        foreach (string addId in addIdList)
    //        {
    //            DAlliance allianceDomain =
    //                entry.CreateAlliance(parentId.ToString(), addId, allianceType);

    //            DatabaseContext.Alliances.Create(allianceDomain);
    //        }
    //        if (deleteIdList != null && deleteIdList.Count > 0)
    //        {
    //            logger.Debug("deleteId : {0}, allianceType : {1}", string.Join(",", deleteIdList.ToArray()), allianceType);
    //        }
    //        IEnumerable<int> allianceIds =
    //            allianceList
    //            .Where(entry.AllianceKeyIn(deleteIdList))
    //            .Select<DAlliance, int>(a => a.Id);
    //        DatabaseContext.Alliances.Delete(allianceIds);
    //    }

    //    /// <summary>
    //    /// 更新List 同时更新List中元素的内容。操作主表，Allliance表和副表。
    //    /// </summary>
    //    protected virtual void CascadeUpdateList<TAlliance, TAllianceKey>(
    //        TKey key,
    //        IEnumerable<TAlliance> domainList,
    //        int allianceType,
    //        ISingleKeyEntityContext<TAlliance, TAllianceKey> context)
    //        where TAlliance : class
    //    {
    //        if (domainList == null)
    //        {
    //            domainList = new List<TAlliance>();
    //        }

    //        string keyStr = key.ToString();
    //        List<DAlliance> allianceList =
    //            DatabaseContext.Alliances.QueryForList(a =>
    //                a.SrcKey == keyStr
    //                && a.Type.Equals(allianceType));

    //        List<string> allianceKeyList =
    //            allianceList
    //            .Select<DAlliance, string>(t => t.AllianceKey)
    //            .ToList();

    //        /*
    //         * Get DomainIdList
    //         * */
    //        Dictionary<string, TAlliance> domainDic =
    //            new Dictionary<string, TAlliance>(domainList.Count());

    //        foreach (TAlliance domain in domainList)
    //        {
    //            domainDic.Add(BindUtil.Extract(domain).First().Value.ToString(), domain);
    //        }
    //        List<string> domainIdList = domainDic.Keys.ToList<string>();

    //        List<string> addIdList, deleteIdList, updateIdList;

    //        EnsureUpdateList(allianceKeyList,
    //            domainIdList,
    //            out deleteIdList,
    //            out addIdList,
    //            out updateIdList);

    //        foreach (string addId in addIdList)
    //        {
    //            TAlliance domain = domainDic[addId];
    //            context.Create(domain);
    //            DAlliance allianceDomain =
    //                AllianceHelper.CreateAlliance(key.ToString(), addId, allianceType);
    //            DatabaseContext.Alliances.Create(allianceDomain);
    //        }

    //        foreach (string updateId in updateIdList)
    //        {
    //            TAlliance domain = domainDic[updateId];
    //            context.Update(domain);
    //        }

    //        context.Delete(
    //            deleteIdList
    //            .Select<string, TAllianceKey>(s =>
    //                (TAllianceKey)Convert.ChangeType(s, typeof(TAllianceKey))));

    //        IEnumerable<int> allianceIds =
    //            allianceList
    //            .Where(a => deleteIdList.Contains(a.AllianceKey))
    //            .Select<DAlliance, int>(a => a.Id);
    //        DatabaseContext.Alliances.Delete(allianceIds);
    //    }

    //    /// <summary>
    //    /// 更新操作时从两个集合中取出需要add的，需要delete的和需要update的
    //    /// </summary>
    //    private void EnsureUpdateList(
    //        IEnumerable<string> list1,
    //        IEnumerable<string> list2,
    //        out List<string> inList1,
    //        out List<string> inList2,
    //        out List<string> inBoth)
    //    {
    //        string[] list1Array = list1.Distinct().OrderBy(a => a, StringComparer.Ordinal).ToArray();
    //        string[] list2Array = list2.Distinct().OrderBy(a => a, StringComparer.Ordinal).ToArray();
    //        int count_n = list1Array.Length;
    //        int count_m = list2Array.Length;
    //        int n = 0;
    //        int m = 0;
    //        inList1 = new List<string>();
    //        inList2 = new List<string>();
    //        inBoth = new List<string>();
    //        while (n < count_n && m < count_m)
    //        {
    //            string str1 = list1Array[n];
    //            string str2 = list2Array[m];
    //            int compareResult = string.Compare(str1, str2, StringComparison.Ordinal);
    //            if (compareResult < 0)
    //            {
    //                inList1.Add(str1);
    //                n++;
    //            }
    //            else if (compareResult == 0)
    //            {
    //                inBoth.Add(str1);
    //                n++;
    //                m++;
    //            }
    //            else if (compareResult > 0)
    //            {
    //                inList2.Add(str2);
    //                m++;
    //            }
    //        }
    //        if (n == count_n)
    //        {
    //            int count = list2Array.Length - m;
    //            if (count > 0)
    //            {
    //                string[] rest = new string[count];
    //                Array.Copy(list2Array, m, rest, 0, count);
    //                inList2.AddRange(rest);
    //            }
    //        }
    //        else if (m == count_m)
    //        {
    //            int count = list1Array.Length - n;
    //            if (count > 0)
    //            {
    //                string[] rest = new string[count];
    //                Array.Copy(list1Array, n, rest, 0, count);
    //                inList1.AddRange(rest);
    //            }
    //        }
    //    }

    //    /// <summary>
    //    /// 删除Domain中的List， 只会删除主表和关联表，不会删副表
    //    /// </summary>
    //    /// <param name="srcKey">Domain的Id值，也就是Alliance表中srcKey的值</param>
    //    /// <param name="allianceType">int型的type值，也就是Alliance表中的type值</param>
    //    protected void DeleteList(TKey srcKey, int allianceType)
    //    {
    //        DeleteNormalOrRefList(srcKey, allianceType, ReferenceEntry.Positive);
    //    }

    //    protected void DeleteReferenceList(TKey srcKey, int allianceType)
    //    {
    //        DeleteNormalOrRefList(srcKey, allianceType, ReferenceEntry.Negative);
    //    }

    //    private void DeleteNormalOrRefList(TKey parentKey, int allianceType, ReferenceEntry entry)
    //    {
    //        List<DAlliance> allianceList =
    //            DatabaseContext.Alliances.QueryForList(entry.QuerySrcKey(parentKey.ToString(), allianceType));
    //        DatabaseContext.Alliances.Delete(allianceList.Select<DAlliance, int>(a => a.Id));
    //    }

    //    /// <summary>
    //    /// 删除Domain的List，会同时删除主表，副表，关联表
    //    /// </summary>
    //    /// <param name="srcKey"></param>
    //    /// <param name="allianceType"></param>
    //    /// <param name="deleteIdMethod">删除List中记录用到的delete方法（根据Id删除）</param>
    //    protected void CascadeDeleteList<TAlliance>(
    //        TKey srcKey,
    //        int allianceType,
    //        ISingleKeyEntityContext<TAlliance, string> context)
    //        where TAlliance : class
    //    {
    //        string srcKeyStr = srcKey.ToString();
    //        List<Alliance> allianceList =
    //            EntityManager
    //            .CreateQuery<Alliance>("[Alliance]")
    //            .Where(s => s.SrcKey == srcKeyStr && s.Type == allianceType)
    //            .ToList();

    //        context.Delete(
    //            allianceList
    //            .Select<Alliance, string>(a => a.AllianceKey));

    //        DatabaseContext.Alliances.Delete(allianceList.Select<Alliance, int>(a => a.Id));
    //    }

    //    protected List<TAlliance> AssembleExtensionList<TAlliance, TAllianceEntity, TAllianceKey>(
    //        TKey srcKey,
    //        int type,
    //        IQueryBehavior<TAlliance, TAllianceEntity> context)
    //        where TAlliance : class
    //        where TAllianceEntity : class, IEntityWithKey, new()
    //    {
    //        return AssembleNormalOrRefExtensionList<TAlliance, TAllianceEntity, TAllianceKey>(
    //            srcKey,
    //            type,
    //            context,
    //            ReferenceEntry.Positive);
    //    }

    //    protected List<TAlliance> AssembleReferenceExtensionList<TAlliance, TAllianceEntity, TAllianceKey>(
    //        TKey key,
    //        int type,
    //        IQueryBehavior<TAlliance, TAllianceEntity> context)
    //        where TAlliance : class
    //        where TAllianceEntity : class, IEntityWithKey, new()
    //    {
    //        return AssembleNormalOrRefExtensionList<TAlliance, TAllianceEntity, TAllianceKey>(
    //            key,
    //            type,
    //            context,
    //            ReferenceEntry.Negative);
    //    }

    //    private List<TAlliance> AssembleNormalOrRefExtensionList<TAlliance, TAllianceEntity, TAllianceKey>(
    //        TKey key,
    //        int type,
    //        IQueryBehavior<TAlliance, TAllianceEntity> context,
    //        ReferenceEntry entry)
    //        where TAlliance : class
    //        where TAllianceEntity : class, IEntityWithKey, new()
    //    {
    //        //List<string> allianceKeys =
    //        //    EntityManager
    //        //    .CreateQuery<Alliance>("[Alliance]")
    //        //    .Where(entry.QuerySrcKey(key.ToString(), type))
    //        //    .Select<Alliance, string>(entry.EntityAllianceKeyProperty)
    //        //    .ToList();

    //        //if (allianceKeys.Count == 0)
    //        //{
    //        //    return new List<TAlliance>();
    //        //}

    //        List<TAlliance> totalList = new List<TAlliance>();

    //        //Util.BatchOperation(allianceKeys, s =>
    //        //{
    //        //    List<TAlliance> alliance =
    //        //        context.QueryForList(string.Format("it.Id in {0}", s.ToESQLCollection()));
    //        //    totalList.AddRange(alliance);
    //        //});
    //        var sql = string.Format("it.Id in (select value {0} from [Alliance] as a where a.Type = @type and {1} = @key)", entry.EntityAllianceKeyProperty.Body.ToString(), entry.EntitySrcKeyProperty.Body.ToString());
    //        List<TAlliance> alliance =
    //                context.QueryForList(sql, new ObjectParameter[] { new ObjectParameter("type", type), new ObjectParameter("key", key.ToString()) });
    //        totalList.AddRange(alliance);
    //        return totalList;
    //    }

    //    #region ISingleKeyEntityContext<TDomain,TKey> Members


    //    public virtual void CustomizedUpdate(TDomain obj)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    #endregion
    //}
}

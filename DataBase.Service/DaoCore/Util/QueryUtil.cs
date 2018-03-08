using System;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace DataBase.Service.DaoCore.Util
{
    public static class QueryUtil
    {
        public static string BuildKeyQuery(IEnumerable<EntityKeyMember> keyMembers,
            out ObjectParameter[] parameters)
        {

            parameters = new ObjectParameter[keyMembers.Count()];

            int index = 0;
            using (IEnumerator<EntityKeyMember> enumerator = keyMembers.GetEnumerator())
            {
                //拼接字符串，例如会出现it.Id = @Id;objcetParameter(Id,"123")
                enumerator.MoveNext();
                EntityKeyMember keyMember = enumerator.Current;
                StringBuilder builder = new StringBuilder();
                builder.Append("it.");
                builder.Append(keyMember.Key);
                builder.Append(" = @");
                builder.Append(keyMember.Key);
                parameters[index++] = new ObjectParameter(keyMember.Key, keyMember.Value);

                while (enumerator.MoveNext())
                {
                    builder.Append(" and ");
                    keyMember = enumerator.Current;
                    builder.Append("it.");
                    builder.Append(keyMember.Key);
                    builder.Append(" = @");
                    builder.Append(keyMember.Key);
                    parameters[index++] = new ObjectParameter(keyMember.Key, keyMember.Value);
                }
                return builder.ToString();
            }
        }

        /// <summary>
        /// key中不含有特殊字符，可以不用占位符
        /// </summary>
        public static string BuildKeyQuery(IEnumerable<IEnumerable<EntityKeyMember>> keys)
        {

            StringBuilder sb = new StringBuilder();
            using (IEnumerator<IEnumerable<EntityKeyMember>> tor = keys.GetEnumerator())
            {
                tor.MoveNext();
                IEnumerable<EntityKeyMember> arr = tor.Current;
                using (IEnumerator<EntityKeyMember> key = arr.GetEnumerator())
                {
                    key.MoveNext();
                    EntityKeyMember keyMember = key.Current;
                    sb.Append("(it.").Append(keyMember.Key).Append("=").Append(GetValue(keyMember.Value));
                    while (key.MoveNext())
                    {
                        sb.Append(" and ");
                        sb.Append("it.").Append(keyMember.Key).Append("=").Append(GetValue(keyMember.Value));
                    }
                    sb.Append(")");
                }
                while (tor.MoveNext())
                {
                    sb.Append(" or ");
                    arr = tor.Current;
                    using (IEnumerator<EntityKeyMember> key = arr.GetEnumerator())
                    {
                        key.MoveNext();
                        EntityKeyMember keyMember = key.Current;
                        sb.Append("(it.").Append(keyMember.Key).Append("=").Append(GetValue(keyMember.Value));
                        while (key.MoveNext())
                        {
                            sb.Append(" and ");
                            sb.Append("it.").Append(keyMember.Key).Append("=").Append(GetValue(keyMember.Value));
                        }
                        sb.Append(")");
                    }
                }
            }

            return sb.ToString();
        }

        public static string BuildKeyQuery(EntityKeyMember keyMember)
        {
            StringBuilder builder = new StringBuilder();
            builder.Append("it.");
            builder.Append(keyMember.Key);
            builder.Append(">");
            builder.Append(GetValue(keyMember.Value));
            return builder.ToString();
        }

        public static string BuildMutilKeyQuery(IEnumerable<IEnumerable<EntityKeyMember>> keys)
        {

            StringBuilder sb = new StringBuilder();
            using (IEnumerator<IEnumerable<EntityKeyMember>> tor = keys.GetEnumerator())
            {
                tor.MoveNext();
                IEnumerable<EntityKeyMember> arr = tor.Current;
                using (IEnumerator<EntityKeyMember> key = arr.GetEnumerator())
                {
                    key.MoveNext();
                    EntityKeyMember keyMember = key.Current;
                    sb.Append("(it.").Append(keyMember.Key).Append(">").Append(GetValue(keyMember.Value));
                    while (key.MoveNext())
                    {
                        sb.Append(" and ");
                        sb.Append("it.").Append(keyMember.Key).Append(">").Append(GetValue(keyMember.Value));
                    }
                    sb.Append(")");
                }
                while (tor.MoveNext())
                {
                    sb.Append(" or ");
                    arr = tor.Current;
                    using (IEnumerator<EntityKeyMember> key = arr.GetEnumerator())
                    {
                        key.MoveNext();
                        EntityKeyMember keyMember = key.Current;
                        sb.Append("(it.").Append(keyMember.Key).Append(">").Append(GetValue(keyMember.Value));
                        while (key.MoveNext())
                        {
                            sb.Append(" and ");
                            sb.Append("it.").Append(keyMember.Key).Append(">").Append(GetValue(keyMember.Value));
                        }
                        sb.Append(")");
                    }
                }
            }

            return sb.ToString();
        }

        private static string GetValue(object value)
        {
            if (value.GetType() == typeof(string))
            {
                return "'" + value + "'";
            }
            return value.ToString();
        }

        private static int buildInCount = 0;
        public static string BuildInClause<TKey>(IEnumerable<TKey> keys,
            out ObjectParameter[] parameters)
        {
            int count = 0;
            int index = 0;
            parameters = new ObjectParameter[keys.Count()];
            using (var tor = keys.GetEnumerator())
            {
                StringBuilder builder = new StringBuilder();
                builder.Append("{");
                tor.MoveNext();
                count = Interlocked.Increment(ref buildInCount);
                string name = string.Concat("a", count.ToString());
                builder.Append("@");
                builder.Append(name);
                parameters[index++] = new ObjectParameter(name, tor.Current);

                while (tor.MoveNext())
                {
                    count = Interlocked.Increment(ref buildInCount);
                    name = string.Concat("a", count.ToString());
                    builder.Append(",");
                    builder.Append("@");
                    builder.Append(name);
                    parameters[index++] = new ObjectParameter(name, tor.Current);
                }
                builder.Append("}");
                return builder.ToString();
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebRoot.Repositories;

namespace WebRoot.Controllers
{
    [RoutePrefix("api/detail")]
    public class DetailController : ApiController
    {
        BusinessRepostory _businessRepostory = new BusinessRepostory();

        [HttpPost,Route("{id}")]
        public object GetBusinsdetail(string id)
        {
            return _businessRepostory.Get(id);
        }
    }
}

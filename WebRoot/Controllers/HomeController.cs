using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebRoot.Repositories;
using WebRoot.ViewModels;

namespace WebRoot.Controllers
{
    [RoutePrefix("api/home")]
    public class HomeController : ApiController
    {
        [HttpPost,Route("getbuiness")]
        public List<Business> GetBuiness()
        {
            return BusinessRepostory.Get();
        }
    }
}

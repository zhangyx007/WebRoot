using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebRoot.ViewModels
{
    public class Business
    {
        public string ID { get; set; }
        public string Url { get; set; }
        public string ArrivTime { get; set; }
        public string Title { get; set; }
        public int Order { get; set; }
        public int DistributionFee { get; set; }

    }
}
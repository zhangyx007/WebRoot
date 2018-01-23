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

    public class BusinessDetails
    {
        public string ID { get; set; }
        public string Image { get; set; }
        public string Title { get; set; }
        public string Address { get; set; }
        //营业时间
        public string BusinessHours { get; set;}

        //起送价
        public int StartingPrice { get; set; }
        //配送费
        public int DistributionFee { get; set; }
        public string ArrivTime { get; set; }
        public int Order { get; set; }
        public string BusinessAnnouncement { get; set; }
        //商品分类
        public List<string> CommodityClassifications { get; set; }
        //商品
        public List<Commodity> CommodityList { get; set; }
    }

    public class Commodity
    {
        public string ID { get; set; }
        public string Image { get; set; }
        public int Price { get; set; }
        public string Details { get; set; }
        public string Orders { get; set; }
    }
}
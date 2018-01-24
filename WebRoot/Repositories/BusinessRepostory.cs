using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebRoot.ViewModels;

namespace WebRoot.Repositories
{
    public class BusinessRepostory
    {
        public List<Business> Get()
        {
            var business = new Business()
            {
                ID = Guid.NewGuid().ToString(),
                Url = "Image/6745acb55e9f0150f02720f22bb44png.webp.jpg",
                Title = "满炖(三好旗舰店)",
                Order = 11206,
                ArrivTime = "24",
                DistributionFee = 4
            };
            var list = new List<Business>() { business };      
            return list;
        }

        public BusinessDetails Get(string id)
        {
            var businessInfo = new BusinessDetails()
            {
                ID = Guid.NewGuid().ToString(),
                Image = "Image/6745acb55e9f0150f02720f22bb44png.webp.jpg",
                Title = "满炖(三好旗舰店)",
                Order = 11206,
                ArrivTime = "24",
                DistributionFee = 4,
                Address = "沈阳市沈河区西顺城街170-1号新恒基国际大厦1009号",
                BusinessHours = "10:00-21:00",
                StartingPrice = 20,
                Categorys = GetCategory(id),
                CommodityList = new List<Commodity>()
            };
            var comitiy = new Commodity()
            {
                ID = Guid.NewGuid().ToString(),
                Name = "珍珠奶茶/大杯",
                Image = "Image/1.png",
                Price = 10,
                Details = "醇香奶茶中加入一颗颗香Q弹牙、嚼劲十足的珍珠，人气饮品好喝不簡單。",
                CategoryId = 0,
                Orders = "206"
            };
            var comitiy1 = new Commodity()
            {
                ID = Guid.NewGuid().ToString(),
                Name = "珍珠奶茶/大杯",
                Image = "Image/1.png",
                Price = 10,
                Details = "醇香奶茶中加入一颗颗香Q弹牙、嚼劲十足的珍珠，人气饮品好喝不簡單。",
                CategoryId = 0,
                Orders = "206"
            };
            var comitiy2 = new Commodity()
            {
                ID = Guid.NewGuid().ToString(),
                Name = "珍珠奶茶/大杯",
                Image = "Image/1.png",
                Price = 10,
                Details = "醇香奶茶中加入一颗颗香Q弹牙、嚼劲十足的珍珠，人气饮品好喝不簡單。",
                CategoryId = 0,
                Orders = "206"
            };
            businessInfo.CommodityList.Add(comitiy);
            businessInfo.CommodityList.Add(comitiy1);
            businessInfo.CommodityList.Add(comitiy2);
            return businessInfo;
        }

        private List<Categorys> GetCategory(string id)
        {
            var category0 = new Categorys()
            {
                ID = 0,
                Category = "热销"
            };
            var category1 = new Categorys()
            {
                ID = 1,
                Category = "季节限定"
            };
            var category2 = new Categorys()
            {
                ID = 2,
                Category = "白色先醇"
            };
            var category3 = new Categorys()
            {
                ID = 3,
                Category = "醇香奶茶"
            };
            var category4 = new Categorys()
            {
                ID = 4,
                Category = "醇黑浓情"
            };
            var category5 = new Categorys()
            {
                ID = 5,
                Category = "鲜果鲜茶"
            };
            var category6 = new Categorys()
            {
                ID = 6,
                Category = "益菌多多"
            };
            var listCategory = new List<Categorys>();
            listCategory.Add(category0);
            listCategory.Add(category1);
            listCategory.Add(category2);
            listCategory.Add(category3);
            listCategory.Add(category4);
            listCategory.Add(category5);
            listCategory.Add(category6);
            return listCategory;
        }
    }
}
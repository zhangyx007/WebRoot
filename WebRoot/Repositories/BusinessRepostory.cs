using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebRoot.ViewModels;

namespace WebRoot.Repositories
{
    public class BusinessRepostory
    {
        public static List<Business> Get()
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

        public static BusinessDetails Get(string id)
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
                BusinessHours = "10:00-21:00"
            };
            return businessInfo;
        }
    }
}
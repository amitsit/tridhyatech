using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TridhiyaTechAPI.Entities
{
    public class PortfolioFeatureEntity
    {
        public int FeatureId { get; set; }
        public string FeatureText { get; set; }
        public int PortfolioId { get; set; }
    }
}
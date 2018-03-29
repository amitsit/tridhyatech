using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TridhiyaTechAPI.Entities
{
    public class BlogPostCategoryEntity
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public int? UserId { get; set; }
        public bool? IsActive { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
}
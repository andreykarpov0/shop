using Microsoft.AspNetCore.Mvc;
using shop.Util;

namespace shop.Controllers
{
    public class CatalogController : Controller
    {
        [Route("/getAllGoods")]
        public async Task<JsonResult> GetAllGoods()
        {
            using (ApplicationContext app = new ApplicationContext())
            {
                var goods = app.Goods.Select(g => new
                {
                    g.Id,
                    g.Name,
                    g.Cost
                });
                return Json(goods);
            }
        }
    }
}

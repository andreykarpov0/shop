using System.Xml;
using Microsoft.AspNetCore.Mvc;
using shop.Util;
using shop.ViewModels;

namespace shop.Controllers
{
    public class BasketController: Controller
    {
        [Route("/addGood")]
        public async Task<JsonResult> AddGoodToBasket(int id)
        {
            XmlDocument xDocument = new XmlDocument();
            xDocument.Load("basket.xml");
            XmlElement? xRoot = xDocument.DocumentElement;
            //
            XmlElement newGoodElement = xDocument.CreateElement("good");
            XmlAttribute nameAttribute = xDocument.CreateAttribute("name");
            XmlText nameText = xDocument.CreateTextNode($"{id}");
            //
            nameAttribute.AppendChild(nameText);
            newGoodElement.Attributes.Append(nameAttribute);
            //
            xRoot?.AppendChild(newGoodElement);
            xDocument.Save("basket.xml");
            return Json(ResultModel.ResultOK());
        }

        [Route("/removeGood")]
        public async Task<JsonResult> RemoveGoodFromBasket(int id)
        {

        }

        [Route("/getBasketList")]
        public async Task<JsonResult> GetBasketList()
        {

        }
    }
}

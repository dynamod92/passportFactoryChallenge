using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
namespace update_dotnet_redux_proj.SQLite
{
    [Route("api/[controller]")]
    public class FactoriesController : Controller
    {
        [HttpGet("[action]")]
    public IEnumerable<Factory> Factories ()
        {
            using (var db = new FactoryContext())
            {
                var factories = db.Factories.ToList();

                return factories;
                
            }
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


namespace update_dotnet_redux_proj
{
    [Route("api/[controller]")]
    public class FactoryController : Controller
    {

        [HttpGet("[action]")]
        public IEnumerable<Factory> Factories(int startDateIndex)
        {
            using (var db = new FactoryContext())
            {
               return 
                db.Factories.ToList();
            }
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> AddFactory([FromBody]Factory newFactory)
        {
            Console.WriteLine("add");
            using (var db = new FactoryContext())
            {
                db.Factories.Add(newFactory);
                await db.SaveChangesAsync();

                return Ok(newFactory);
            }
        }

        [HttpPut("[action]")]

        public async Task<IActionResult> UpdateFactory([FromBody]Factory factory)
        {
            Console.WriteLine("update");
            using (var db = new FactoryContext())
            {
                db.Factories.Update(factory);
                await db.SaveChangesAsync();

                return Ok(db.Factories.ToList());
            }
        }

        [HttpGet("[action]")]
        public IEnumerable<Child> Children(int startDateIndex)
        {
            using (var db = new FactoryContext())
            {
               return 
                db.Children.ToList();
            }
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> AddChild([FromBody]Child newChild)
        {
            Console.WriteLine("add");
            using (var db = new FactoryContext())
            {
                db.Children.Add(newChild);
                await db.SaveChangesAsync();

                return Ok(newChild);
            }
        }

        [HttpPut("[action]")]
        public async Task<IActionResult> UpdateChild([FromBody]Child child)
        {
            Console.WriteLine("update");
            using (var db = new FactoryContext())
            {
                db.Children.Update(child);
                await db.SaveChangesAsync();

                return Ok(db.Children.ToList());
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.WebSockets;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Threading;
using Microsoft.AspNetCore.Http;
using System.Text;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;

namespace update_dotnet_redux_proj
{
    [Route("api/[controller]")]
    public class FactoryController : Controller
    {

        [HttpGet("[action]")]

        public async Task GetFactories()
        {
            var context = ControllerContext.HttpContext;
            var isSocketRequest = context.WebSockets.IsWebSocketRequest;

            if (isSocketRequest)
            {
                WebSocket webSocket = await context.WebSockets.AcceptWebSocketAsync();
                await Factories(context, webSocket);
            }
            else
            {
                context.Response.StatusCode = 400;
            }
        }
        public async Task<IActionResult> Factories(HttpContext context, WebSocket webSocket)
        {            
            using (var db = new FactoryContext())
            {
               var factories = db.Factories.ToList();

                var binFormatter = new BinaryFormatter();
                var mStream = new MemoryStream();
                binFormatter.Serialize(mStream, factories);

                var arraySegment = new ArraySegment<byte>(mStream.ToArray());
                await webSocket.SendAsync(arraySegment, WebSocketMessageType.Text, true, CancellationToken.None);
               return Ok(factories);
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

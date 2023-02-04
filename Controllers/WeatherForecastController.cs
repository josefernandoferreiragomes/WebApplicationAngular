using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;

namespace WebApplicationAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpPost]
        public SimpleWeatherCalculate Post(SimpleWeatherCalculate exampleIn)
        {
            //TODO Process input and then provide forecast
            //will use mock response
            SimpleWeatherCalculate response = new SimpleWeatherCalculate();

            response.DateInput = exampleIn.DateInput;
            response.FirstHour = exampleIn.FirstHour;
            response.LastHour = exampleIn.LastHour;
            response.ResultResponse = String.Format("the weeather will be sunny from {0} to {1}, {2}", exampleIn.FirstHour, exampleIn.LastHour, exampleIn.DateInput);

            return response;
        }
    }
}

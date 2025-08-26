async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "5e456ecc9abd9535d4cbb661d0644674"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      document.getElementById("result").innerHTML = "<p>❌ City not found!</p>";
      return;
    }

    document.getElementById("result").innerHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p>🌡 Temperature: ${data.main.temp} °C</p>
      <p>☁ Weather: ${data.weather[0].description}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
    `;
  } catch (error) {
    document.getElementById("result").innerHTML = "<p>⚠ Something went wrong!</p>";
  }
}

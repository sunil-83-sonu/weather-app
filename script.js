const apiKey = "dd099d89b262b845e4fb5e028a5cce9e"; // 👈 Yahan apna OpenWeather API key daalo
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  } else {
    alert("Please enter a city name!");
  }
});

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      alert("City not found!");
      return;
    }

    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temperature").textContent = `🌡️ ${data.main.temp}°C`;
    document.getElementById("condition").textContent = `🌥️ ${data.weather[0].description}`;
  } catch (error) {
    alert("Error fetching weather data!");
    console.error(error);
  }
}

# WeatherNova 🌤️

A modern, Tesla-inspired weather dashboard with real-time weather data, forecasts, interactive maps, and air quality monitoring.

## Features

- 🌡️ Real-time weather data with beautiful glass morphism UI
- 📅 7-day weather forecast
- ⏰ Hourly forecast (next 24 hours)
- 🗺️ Interactive weather radar with precipitation, wind, and temperature layers
- 💨 Air quality index monitoring
- 🌅 Sunrise/sunset times
- 🌙 Dark/Light theme toggle
- 📍 Geolocation support
- ⭐ Save favorite locations
- 🔍 Recent search history
- 📱 Fully responsive design with mobile bottom navigation

## Setup

1. Clone the repository:
```bash
git clone https://github.com/abdulhadi42889-spec/weathernova.git
cd weathernova
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Get your free API key from [OpenWeather](https://openweathermap.org/api) and add it to `.env`:
```
OPENWEATHER_API_KEY=your_api_key_here
PORT=3000
```

5. Start the server:
```bash
npm start
```

6. Open your browser and navigate to:
```
http://localhost:3000
```

## Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **APIs**: OpenWeather API
- **Maps**: Leaflet.js
- **Design**: Glass morphism, responsive design

## API Endpoints

- `/api/weather` - Current weather data
- `/api/forecast` - 5-day forecast
- `/api/air-quality` - Air quality index

## License

MIT License - feel free to use this project for learning or personal use.

## Credits

Built with ❤️ using OpenWeather API

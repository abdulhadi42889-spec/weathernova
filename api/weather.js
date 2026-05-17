export default async function handler(req, res) {
    try {
        const { q, lat, lon, units } = req.query;
        const API_KEY = process.env.OPENWEATHER_API_KEY;
        const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';

        let url;
        if (lat && lon) {
            url = `${WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units || 'imperial'}`;
        } else if (q) {
            url = `${WEATHER_URL}?q=${q}&appid=${API_KEY}&units=${units || 'imperial'}`;
        } else {
            return res.status(400).json({ error: 'Missing required parameters' });
        }

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
}

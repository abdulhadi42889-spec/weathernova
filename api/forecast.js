export default async function handler(req, res) {
    try {
        const { lat, lon, units } = req.query;
        const API_KEY = process.env.OPENWEATHER_API_KEY;
        const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';

        if (!lat || !lon) {
            return res.status(400).json({ error: 'Missing lat/lon parameters' });
        }

        const url = `${FORECAST_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units || 'imperial'}`;
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch forecast data' });
    }
}

const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const API_KEY = process.env.OPENWEATHER_API_KEY || '785c9fed4946bb7841d81620c88d0204';
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';
const ONECALL_URL = 'https://api.openweathermap.org/data/2.5/onecall';
const AIR_QUALITY_URL = 'https://api.openweathermap.org/data/2.5/air_pollution';

app.get('/api/weather', async (req, res) => {
    try {
        const { q, lat, lon, units } = req.query;

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
});

app.get('/api/forecast', async (req, res) => {
    try {
        const { lat, lon, units } = req.query;

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
});

app.get('/api/air-quality', async (req, res) => {
    try {
        const { lat, lon } = req.query;

        if (!lat || !lon) {
            return res.status(400).json({ error: 'Missing lat/lon parameters' });
        }

        const url = `${AIR_QUALITY_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch air quality data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

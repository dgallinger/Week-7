const mongoose = require('mongoose');

const Weather = require('../models/weather');

module.exports = {};

module.exports.getWeather = async (location) => {
    const weather = await Weather.findOne({ name : location }).lean();
    if (weather == null) {
        return false;
    } else {
        return weather;
    }
}
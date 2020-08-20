const { Router } = require("express");
const router = Router();

const weatherDAO = require('../daos/weather');

router.get("/", (req, res, next) => {
    res.render('weather');
});

router.get("/location", async (req, res, next) => {
    if (!req.query.name) {
        res.status(302);
        return res.redirect('/weather');
    }
    try {
        const location = req.query.name;
        const weather = await weatherDAO.getWeather(location);
        if (weather) {
            res.render('location', { location : weather.name, temperature : weather.temperature });
        } else {
            res.status(404).render('location', { location : location, temperature : 'not available' });
        }
    } catch (err) {
        console.log(err.message);
        return;
    }
});

module.exports = router;
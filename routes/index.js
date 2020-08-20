const { Router } = require('express');
const router = Router();

router.use('/landing', require('./landing'));
router.use('/weather', require('./weather'));
   
module.exports = router;
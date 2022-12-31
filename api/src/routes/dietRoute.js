const { Router } = require('express');
const { getApiDiets } = require('../controllers/dietControllers')


const router = Router();

router.get('/', async(req, res) => {
    res.status(200).json(await getApiDiets());
});


module.exports = router;
const { Router } = require('express');
const { getDbDiets } = require('../controllers/dietControllers')


const router = Router();

router.get('/', getDbDiets);


module.exports = router;
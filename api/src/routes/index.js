const { Router } = require('express');
const recipeRoute = require('./recipeRoute')
const dietRoute = require('./dietRoute')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipes', recipeRoute)
router.use('/diets', dietRoute)



module.exports = router;
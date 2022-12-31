const { Router } = require('express');
const { getRecipeAll } = require('../controllers/recipeContellers')
const { Recipe, Diet } = require('../db')


const router = Router();


router.get('/', async(req, res, next) => {
    const name = req.query.name
    let founRecipes = await getRecipeAll();

    try {
        if (!name) {
            res.status(200).send(founRecipes)
        } else {
            let recipes = await founRecipes.filter(r => r.name.toLowerCase().includes(name.toLowerCase()))
            recipes.length ?
                res.status(200).send(recipes) :
                res.status(404).send('Recipe not found')
        }
    } catch (e) {
        next(e)
    }
});


router.get('/:idReceta', async(req, res, next) => {
    const idReceta = req.params.idReceta;
    let recipeFoundById = await getRecipeAll();
    try {
        if (!idReceta) {
            res.status(200).send(recipeFoundById)
        } else {
            let byId = await recipeFoundById.filter(r => r.id.toString() === idReceta.toString())
            byId.length ?
                res.status(200).send(byId) :
                res.status(404).send('Recipe not found with that ID')
        }
    } catch (e) {
        next(e)
    }
});


router.post('/', async(req, res, next) => {
    const { id, name, image, summary, healthScore, step, createdInDB, diet } = req.body

    try {
        const recipeCreated = await Recipe.create({
            id,
            name,
            image,
            summary,
            healthScore,
            step,
            createdInDB
        })

        const dietCreated = await Diet.findAll({
            where: {
                name: diet
            }
        })
        await recipeCreated.addDiet(dietCreated)

        res.status(200).send('Recipe created successfully')
    } catch (error) {
        next(error)
    }
});



module.exports = router;
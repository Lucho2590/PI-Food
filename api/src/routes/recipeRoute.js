const { Router } = require('express');
const { getRecipeAll } = require('../controllers/recipeContellers')
const { Recipe, Diets } = require('../db')


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
    const { id, name, image, summary, healthScore, steps, createdInDB, diets } = req.body

    try {
        const recipeCreated = await Recipe.create({
            id,
            name,
            image,
            summary,
            healthScore,
            steps,
            createdInDB
        })

        const dietCreated = await Diets.findAll({
            where: {
                name: diets
            }
        })
        await recipeCreated.addDiet(dietCreated)

        res.status(200).send('Recipe created successfully')
    } catch (error) {
        next(error)
    }
});

router.delete('/:id/delete', async(req, res, next) => {
    const { id } = req.params;
    try {
        let recipeDelete = await Recipe.findByPk(id)
        recipeDelete.destroy();
        res.status(201).send("Recipe deleted correctly");
    } catch (err) {
        next(err)
    }
})


module.exports = router;
const { Recipe, Diets } = require("../db");
const axios = require("axios");

//////////////////////// AXIOS ////////////////////////////

const getApiDiets = async(req, res, next) => {
    const { ApiKey1, ApiKey2, ApiKey3, ApiKey4, ApiKey5, ApiKey6, ApiKey00 } = process.env;
    const apiKey = ApiKey3
    try {
        let dietUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=100&offset=100&addRecipeInformation=true`, { headers: { 'Accept-Encoding': 'identity' } })
        let dietApi = await dietUrl.data.results.map(e => e.diets);
        let finalDiets = []
        let totalDietApi = dietApi.flat().forEach((elemento) => {
                if (!finalDiets.includes(elemento)) {
                    finalDiets.push(elemento);
                }
            })
            // let totalDietApi = [...new Set(dietApi.flat())];
        console.log(finalDiets)

        finalDiets.forEach(diets => {
            Diets.findOrCreate({
                where: {
                    name: diets
                }
            })
        });
    } catch (error) {
        next(error)
    }

};

// esta función retorna lo guardado en la db (no se gastan pedidos a la API) se ejecuta en la ruta '/diets
const getDbDiets = async(req, res, next) => {
    try {
        const dietsDb = await Diets.findAll()
        res.send(dietsDb)
    } catch (error) {
        next(error)
    }
};


module.exports = {
    getApiDiets,
    getDbDiets
};
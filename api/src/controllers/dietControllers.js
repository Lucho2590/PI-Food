// const fetch = (url) =>
//     import ("node-fetch").then(({ default: fetch }) => fetch(url));
const { Recipe, Diet } = require("../db");
const axios = require("axios");

//////////////////////// AXIOS ////////////////////////////

const getApiDiets = async() => {
    const { ApiKey1, ApiKey2, ApiKey3 } = process.env;
    const apiKey = ApiKey3

    const totalDietDb = Diet.findAll()

    let dietUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=100&offset=100&addRecipeInformation=true`, { headers: { 'Accept-Encoding': 'identity' } })
    let dietApi = await dietUrl.data.results.map(e => e.diets)
    let totalDietApi = dietApi.flat()

    totalDietApi.forEach(diet => {
        Diet.findOrCreate({
            where: {
                name: diet
            }
        })
    });

    return await Diet.findAll()
};

///////////////////////////////  FETCH  ////////////////////////////////

// const getApiDiets = async() => {
//     const { ApiKey1, ApiKey2, ApiKey3 } = process.env;
//     const apiKey = ApiKey1

//     let diets = await Diet.findAll();

//     if (diets.length) return diets;

//     const apiData = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=100&offset=100&addRecipeInformation=true`)
//         .then((response) => response.json())
//         .then((data) => data.results.map((element) => element.diets));

//     const dietsArray = [...new Set(apiData.flat())];

//     dietsArray.forEach(diet => {
//         Diet.findOrCreate({
//             where: { name: diet }
//         })
//     })

//     return await Diet.findAll();
// };

module.exports = {
    getApiDiets
};
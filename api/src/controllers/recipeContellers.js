// const fetch = (url) =>
//     import ('node-fetch').then(({ default: fetch }) => fetch(url));
const { Recipe, Diets } = require('../db')
const axios = require("axios");


///////////////////////////////// CONEXION A LA API ////////////////////////

/////////////////// AXIOS /////////////////////

const getRecipeApi = async() => {

    const { ApiKey } = process.env;


    const urlApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${ApiKey}&addRecipeInformation=true&number=100&offset=100`, { headers: { 'Accept-Encoding': 'identity' } })
    const infoApi = await urlApi.data.results.map((el) => {
        return {
            id: el.id,
            name: el.title,
            image: el.image,
            summary: el.summary,
            healthScore: el.healthScore,
            diets: el.diets,
            steps: el.analyzedInstructions.map((d) => d.steps.map(e => {
                return {
                    order: e.number,
                    do: e.step
                }
            }))
        }
    })
    return infoApi;
};


//////////////////// Fetch ///////////////////////

// const getRecipeApi = async() => {

//     const { ApiKey } = process.env;
//    

//     const dataApi = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${ApiKey}&number=100&offset=100&addRecipeInformation=true`)
//     const data = await dataApi.json()
//         // .then((response) => response.json())
//     return data.results.map((el) => {
//             // .then((data) => data.results.map((el) => {
//             return {
//                 id: el.id,
//                 name: el.title,
//                 image: el.image,
//                 summary: el.summary,
//                 healthScore: el.healthScore,
//                 // diet: el.diets,
//                 steps: el.analyzedInstructions.map((d) => d.steps.map(e => {
//                     return {
//                         order: e.number,
//                         do: e.step
//                     }
//                 }))
//             }
//         }) //)
//         //  return dataApi;
// };

//////////////////////////////// CONEXION A LA DB //////////////////////////

const getRecipeDb = async() => {
    return await Recipe.findAll({
        include: {
            model: Diets,
            attributes: ["name"],
            through: {
                attributes: [],
            }
        }
    });
};



/////////////////////////// CONEXION A LA API Y A LA DB ///////////////////////////

const getRecipeAll = async() => {
    let api = await getRecipeApi();
    let db = await getRecipeDb();
    let all = api.concat(db);
    // let all = [...db, ...api]

    return all;
};


module.exports = {
    getRecipeAll,
}
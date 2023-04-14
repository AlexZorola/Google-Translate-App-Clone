export const translate = async (text, languageFrom, languageTo) => {
    const axios = require("axios");

    const options = {
    method: 'GET',
    url: 'https://nlp-translation.p.rapidapi.com/v1/translate',
    params: {text: text, to: languageTo, from: languageFrom},
    headers: {
        'X-RapidAPI-Key': 'd5094046f5msh00ca11f4f53af27p150a18jsn4b121f26881a',
        'X-RapidAPI-Host': 'nlp-translation.p.rapidapi.com'
    }
    };

    const response = await axios.request(options).catch(function (error) {
        console.error(error);
    });

    if (response.status !== 200) {
        console.log(response);
        throw new Error("Translate call failed. Response status: " + response.status);
    }

    return response.data;
}
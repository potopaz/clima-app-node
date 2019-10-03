const axios = require('axios');


const getClima = async(lat, lng) => {

    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b490c656c0ffc07a54ec4fd95097e694&units=metric`);

    return respuesta.data.main.temp;

}

module.exports = {
    getClima
}
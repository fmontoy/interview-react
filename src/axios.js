import axios from 'axios';

//Generar instancia de axios para obtener el URL base
const instance =  axios.create({
    baseURL: 'http://localhost:3001'
});

export default instance;
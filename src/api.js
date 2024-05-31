// api.js

export default function api(url) {
    return fetch(`http://localhost:1337/api${url}`) // Cambia esto por la URL de tu API de Strapi
        .then(response => {
            if (response.ok) {
                return response.json(); // Devuelve los datos en formato JSON
            } else {
                throw new Error(response.statusText); // Lanza un error si la respuesta no es exitosa
            }
        });
}

//Comentss
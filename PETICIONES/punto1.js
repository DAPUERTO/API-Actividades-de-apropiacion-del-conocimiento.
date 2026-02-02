//Solicitud 1: Realice una solicitud GETpara obtener la lista completa de usuarios disponibles
//en el servicio.


//El método GET se utiliza para solicitar información
//al servidor sin modificar los datos existentes. Es el verbo más común y se emplea
//cuando se requiere consultar uno o varios recursos.


/**
 * SOLICITUD 1: Obtener la lista completa de usuarios.
 * Esta función es asíncrona (async) para permitir el uso de 'await' 
 * y manejar la promesa de la red de forma lineal.
 */
const ListaTotalUsuariosGet = async () => {
    // Realiza la petición GET al endpoint general de usuarios
    const response = await fetch('http://localhost:3000/users');
    
    // Convierte el cuerpo de la respuesta de formato JSON a un objeto/array de JS
    const data = await response.json();
    
    // Retorna los datos para que puedan ser procesados fuera de la función
    return data;
}

// Ejecución de la Solicitud 1:
// Como la función es async, devuelve una promesa; usamos .then() para imprimir el resultado
ListaTotalUsuariosGet().then(data => {
    console.log("Lista Total de Usuarios:", data);
});



/**
 * SOLICITUD 2: Consultar información de un usuario específico por ID.
 * @param {string|number} id - El identificador único del usuario.
 */
const UsuarioEspecificoGet = async (id) => {
    // Usamos Template Literals (comillas invertidas) para insertar el ID dinámicamente en la URL
    const response = await fetch(`http://localhost:3000/users/${id}`);
    
    const data = await response.json();
    return data;
}

// Ejecución de la Solicitud 2: Consultando al usuario con ID 1
UsuarioEspecificoGet(1).then(data => {
    console.log("Información del Usuario 1:", data);
});



/**
 * SOLICITUD 3: Obtener publicaciones asociadas a un usuario.
 * Nota: En muchas APIs REST, el ID del usuario se pasa como parámetro de consulta
 * o como parte de la ruta, dependiendo de cómo esté configurado el servidor.
 */
const PublicacionesUsuarioGet = async (id) => {
    // Realiza la petición para obtener los posts filtrados por el ID del usuario
    const response = await fetch(`http://localhost:3000/posts/${id}`);
    
    const data = await response.json();
    return data; 
}

// Ejecución de la Solicitud 3: Consultando posts del usuario con ID 1
PublicacionesUsuarioGet(1).then(data => {
    console.log("Publicaciones del Usuario 1:", data);
});




// Parte 2: Creación de información (POST)

// • Solicitud 4: Realice una solicitud POST para crear una nueva publicación asociada a un
// usuario existente.
// Incluya información como título y contenido.

/**
 * SOLICITUD 4: Crear una nueva publicación (Post).
 * Se utiliza el método POST para enviar información al servidor.
 */
const CrearNuevaPublicacionPost = async (userId, title, content) => {
    
    const response = await fetch('http://localhost:3000/posts', {
        method: 'POST', // Especificamos que es una creación
        headers: {
            // Indicamos al servidor que el cuerpo de la petición es un JSON
            'Content-Type': 'application/json'
        },
        // Convertimos el objeto de JavaScript a una cadena de texto JSON
        body: JSON.stringify({
            userId: userId,
            title: title,
            content: content
        })
    });

    // Esperamos la respuesta del servidor (usualmente el objeto creado con su nuevo ID)
    const data = await response.json();
    return data;
}

// Llamada a la función para crear un post para el usuario 1
CrearNuevaPublicacionPost(1, 'Nuevo Título', 'Este es el contenido de la nueva publicación.')
    .then(data => {
        console.log("Post creado exitosamente:", data);
    });



/**
 * SOLICITUD 5: Registrar un nuevo comentario relacionado con una publicación.
 */
const RegistrarNuevoComentarioPost = async (postId) => {
    
    const response = await fetch('http://localhost:3000/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            postId: postId,
            content: 'Este es un nuevo comentario.' // Contenido estático en este ejemplo
        })
    });

    const data = await response.json();
    return data;    
}

// Llamada a la función para comentar en la publicación con ID 1
RegistrarNuevoComentarioPost(1)
    .then(data => {
        console.log("Comentario registrado:", data);
    });
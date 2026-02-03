// Solicitud 8: Realice una solicitud DELETE para eliminar una publicación existente.

// Función asíncrona para eliminar una publicación por ID
const EliminarPublicacionDelete = async (postId) => {
    // Realizar solicitud DELETE a la API en localhost:3000/posts/{postId}
    const response = await fetch(`http://localhost:3000/posts/${postId}`, {
        method: 'DELETE'
    });
    // Convertir la respuesta a formato JSON
    const data = await response.json();
    return data;
}

// Llamar a la función con el ID 3 y mostrar el resultado en consola
EliminarPublicacionDelete(3).then(data => {
    console.log(data);
}); 
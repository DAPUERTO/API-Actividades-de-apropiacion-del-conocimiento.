//Parte 3: Actualización de información (PUT y PATCH)

// Solicitud 6: Realice una solicitud PUT para actualizar completamente la información de una
// publicación existente.

const ActualizarPublicacionPut = async (postId, userId, title, body) => {
    const response = await fetch(`http://localhost:3000/posts/${postId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: userId,
            title: title,
            body: body
        })
    });
    const data = await response.json();
    return data;
}

ActualizarPublicacionPut(1, 1, 'Analisis de la API', 'La API permite la comunicación entre diferentes sistemas software.').then(data => {
    console.log(data);
});




// Solicitud 7: Realice una solicitud PATCH para modificar únicamente un campo específico
// de esa publicación.

const ModificarCampoPublicacionPatch = async (postId, updatedFields) => {
    const response = await fetch(`http://localhost:3000/posts/${postId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedFields)
    });
    const data = await response.json();
    return data;
}

ModificarCampoPublicacionPatch(1, { title: 'Para que es una API' }).then(data => {
    console.log(data);
});
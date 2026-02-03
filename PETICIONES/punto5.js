// Solicitud 9: Repita una solicitud GET sobre el recurso eliminado o modificado y analice la
// respuesta obtenida.

const ObtenerPublicacionGet = async (postId) => {
    const response = await fetch(`http://localhost:3000/posts/${postId}`, {
        method: 'GET'
    });
    const data = await response.json();
    return data;   
}

A//l examinar la respuesta de una publicación concreta como la de ID 1 que se eliminó o alteró con anterioridad, observamos que, en caso de eliminación, la respuesta consistirá en un objeto vacío o un código de error 404, mientras que, si se modificó, la respuesta incorporará las actualizaciones efectuadas.
ObtenerPublicacionGet(1).then(data => {
    console.log(data);
});

// Solicitud 10: Realice una solicitud GET general y compare la estructura de la respuesta con
// las solicitudes anteriores, identificando cambios y comportamientos del servicio.


const ObtenerTodasPublicacionesGet = async () => {
    const response = await fetch('http://localhost:3000/posts', {
        method: 'GET'
    });
    const data = await response.json();
    return data;   
}

ObtenerTodasPublicacionesGet().then(data => {
    console.log(data);
});

//Después de revisar la respuesta colectiva, notamos que su formato consiste en un arreglo de elementos,
//  donde cada uno simboliza una publicación. En el caso de que una publicación haya sido suprimida, 
// no figurará en dicho arreglo. Si sufrió alteraciones, el arreglo incorporará las modificaciones aplicadas
//  a esa entrada particular. Esta perspectiva facilita comprender el manejo del servicio respecto a las 
// acciones de supresión y edición, contrastándolas con las consultas GET específicas y globales.
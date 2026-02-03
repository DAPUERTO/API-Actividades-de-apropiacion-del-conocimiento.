# API Transferencia

Este proyecto es una API REST simulada utilizando JSON Server para gestionar datos de usuarios, publicaciones y comentarios. Incluye scripts de ejemplo para realizar peticiones HTTP a la API.

## Tecnologías Utilizadas

- **JSON Server**: Para simular una API REST.
- **Node.js**: Entorno de ejecución para JavaScript.
- **JavaScript**: Lenguaje utilizado para los scripts de peticiones.

## Instalación

1. Asegúrate de tener Node.js instalado en tu sistema.
2. Clona o descarga este repositorio.
3. Navega a la carpeta `API`:
   ```
   cd API
   ```
4. Instala las dependencias:
   ```
   npm install
   ```

## Uso

### Iniciar el Servidor

Para iniciar el servidor JSON Server, ejecuta el siguiente comando desde la carpeta `API`:

```
npx json-server --watch db.json --port 3000
```

Esto iniciará el servidor en `http://localhost:3000` con los datos definidos en `db.json`.

### Endpoints Disponibles

- **GET /users**: Obtener todos los usuarios.
- **GET /posts**: Obtener todas las publicaciones.
- **GET /comments**: Obtener todos los comentarios.
- **POST /users**: Crear un nuevo usuario.
- **POST /posts**: Crear una nueva publicación.
- **POST /comments**: Crear un nuevo comentario.
- **DELETE /posts/:id**: Eliminar una publicación por ID (solo si no tiene comentarios).

### Scripts de Peticiones

En la carpeta `Peticiones`, encontrarás scripts de ejemplo para interactuar con la API:

- **Enunciado1.js**: Obtener usuarios activos con el conteo de sus publicaciones.
- **Enunciado2.js**: Obtener estadísticas de publicaciones con y sin comentarios.
- **Enunciado3.js**: Buscar una publicación específica por ID y obtener su información junto con el conteo de comentarios.
- **Enunciado4.js**: Eliminar una publicación solo si no tiene comentarios asociados.

Para ejecutar cualquiera de estos scripts, navega a la carpeta `Peticiones` y ejecuta:

```
node Enunciado1.js
```

Asegúrate de que el servidor esté corriendo antes de ejecutar los scripts.

## Estructura del Proyecto

```
API_transferencia_main/
├── API/
│   ├── db.json          # Datos de la API (usuarios, posts, comments)
│   ├── package.json     # Dependencias del proyecto
│   └── package-lock.json # Lockfile de npm
├── Peticiones/
│   ├── Enunciado1.js    # Script para usuarios activos con publicaciones
│   ├── Enunciado2.js    # Script para estadísticas de publicaciones
│   ├── Enunciado3.js    # Script para búsqueda específica de publicación
│   └── Enunciado4.js    # Script para eliminación condicional de publicación
└── .gitignore           # Archivos ignorados por Git
```


# API de Instituciones

Este proyecto es una API construida con Node.js y Express que permite acceder a información sobre instituciones y sus sedes desde una base de datos MySQL.

## Estructura del Proyecto

app.js config/ db.js package.json routes/ api.js

### Archivos y Directorios

- **app.js**: Archivo principal que configura y arranca el servidor Express.
- **config/db.js**: Configuración de la conexión a la base de datos MySQL.
- **routes/api.js**: Definición de las rutas de la API.

## Instalación

1. Clona el repositorio:
   ```sh
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_REPOSITORIO>

2. Instala las dependencias:

npm install

3. Configura la base de datos en config/db.js:

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'coepes'
});

Uso
    Inicia el servidor:

El servidor estará corriendo en http://localhost:8080.

### Rutas de la API

Obtener Instituciones

Ruta: /api/instituciones

Método: GET
Descripción: Obtiene los campos si_cct, si_nombre, si_ubicacion, si_regimen, si_sostenimiento, si_acreditacion de la tabla sist_institucion.
Obtener Sedes de Instituciones
Ruta: /api/instituciones_sede

Método: GET
Descripción: Obtiene los campos ssi_nombre y ssi_ubicacion de la tabla sist_institucion_sede.
Dependencias

### express: Framework web para Node.js.
### mysql2: Cliente MySQL para Node.js.
### Contribuciones

Las contribuciones son bienvenidas.

### Licencia

Este proyecto está licenciado bajo la Licencia MIT.


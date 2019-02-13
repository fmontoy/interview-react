# Interview REACT
Aplicación para la visualización de productos

### Instalación:

* Clone este repositorio
* El branch Master está actualizado con la última versión de la aplicación
* Instale las dependencias del proyecto `npm install`
* Inicie el servidor de desarrollo `npm start`
* Inicie el servidor para backend en el puerto 3001 `json-server --watch db.json --port 3001`
* Ingrese a la url http://localhost:3000 en su navegador

### Observaciones:
1. El servidor de desarrollo de react inicia en el puerto 3000, por esto el servidor de backend esta iniciado en el 3001
2. La url usada para hacer los http requests fue http://localhost:3001
3. Si modifica el puerto 3001 para el backend, es necesario que ingrese a src/axios.js y modifique el item "BaseURL" por la url que elija.

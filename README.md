Valkimia API y Gestion de Usuarios

Este proyecto esta realizado con Node + Express y MySQL + Sequelize como ORM.
El mismo cuenta con mmigrations para la creacion de las tablas.
Una parte de la app, a traves de express, se encarga de la gestion de usuarios (ABM).
Por otro lado la app cuenta con una API para la gestion de facturas a consumir por otra app de front.

--Instrucciones--

Clonar el repositorio en un directorio. En aquella carpeta correr el comando npm i para instalar las dependencias necesarias.
Configurar la base de datos a asociar en /database/config/config.json, esta debe ser MySQL.
Ejecutar los migrations para la realizacion de las tablas de la base de datos con: npx sequelize-cli db:migrate.
Luego ejecutar npm start y ya deberia ejecutarse, por defecto corre en el puerto 4000.

--Endpoints--

http://localhost:4000/api/cliente/lista


http://localhost:4000/api/cliente/detalle/id

Ejemplo:

http://localhost:4000/api/cliente/detalle/1


http://localhost:4000/api/factura/lista


http://localhost:4000/api/factura/detalle/id

Ejemplo:

http://localhost:4000/api/factura/detalle/1


Este ultimo endpoint es la recepcion por POST de un formulario con los datos de la nueva factura

http://localhost:4000/api/factura/generate
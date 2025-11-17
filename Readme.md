# Backend Control de gastos

Este proyecto es el backend para una aplicación de control de gastos personales o por proyectos. Proporciona una API RESTful para gestionar usuarios, categorías, y transacciones de gastos, permitiendo a los usuarios llevar un registro de sus finanzas.

## Arquitectura

El proyecto está desarrollado siguiendo los principios de **Clean Architecture**. Esto asegura una separación clara de las responsabilidades, desacoplando la lógica de negocio de los frameworks y las implementaciones de la base de datos, lo que resulta en un sistema más mantenible, escalable y fácil de probar.

## Tecnologías y Dependencias Principales

*   **Node.js**: Entorno de ejecución para JavaScript.
*   **Express.js**: Framework web para la creación de la API REST.
*   **Mongoose**: Como ODM (Object Data Modeling) para interactuar con una base de datos MongoDB.
*   **Sequelize Postgresql**: Como ORM para interactuar con una base de datos Postgresql.
*   **JsonWebToken**: Para la generación de tokens de autenticación (JWT).
*   **Bcrypt.js**: Para el hasheo seguro de contraseñas.
*   **Dotenv**: Para el manejo de variables de entorno.

---



## Correr el servidor

1. Instalacion de dependencias 

```bash
npm i
```

2. Copia el archivo ``.env.template`` y crea el archivo ``.env``

3. Ejecuta el comando para arrancar el servidor:
 * Si tienes una version de node mayor o igual 20.x.x ejecuta:

```bash
npm run dev
```


* Si tienes una version mayor o igual a 22.x.x puedes ejecutar con el siguiente comando

````bash
node --run dev
```
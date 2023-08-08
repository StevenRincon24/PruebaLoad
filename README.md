# Biblioteca Municipal - Gestión de Libros, Empleados y Préstamos

Este proyecto es una API RestFull desarrollada en Node.js con el framework Express. Su objetivo principal es ayudar a la gestión de libros, empleados y préstamos en una biblioteca municipal. Proporciona un sistema completo de CRUD (Crear, Leer, Actualizar y Eliminar) para administrar los datos asociados a los empleados, libros y servicios de la biblioteca.

# Consideraciones de despliegue


## Contexto

La biblioteca municipal es administrada por una persona encargada de gestionar los empleados y los libros disponibles. A continuación se detallan los principales elementos a tener en cuenta:

## Empleados

Los empleados de la biblioteca son registrados y gestionados mediante el sistema. Cada empleado tiene la siguiente información asociada:

- Nombres
- Apellidos
- Fecha de nacimiento
- Teléfono
- Usuario y contraseña
- Es importante destacar que los empleados deben ser mayores de edad para poder registrarse en el sistema.

## Libros

Los libros disponibles en la biblioteca se registran y gestionan mediante el sistema. Cada libro tiene los siguientes datos:

- ISBN (International Standard Book Number)
- Nombre
- Autor
- Género (Ficción, Drama, Comedia, Ciencia Ficción, etc.)
- Número de copias disponibles
- Fecha de publicación
- Multa diaria

## Préstamos

Los empleados registrados podrán iniciar sesión en el sistema y realizar préstamos de libros a los usuarios registrados. Para realizar un préstamo, se deben tener en cuenta las siguientes condiciones:

- El préstamo solo se realizará a usuarios registrados.
- El usuario debe cumplir con la calificación de edad requerida para el libro solicitado (+4, +5, +18).
- El usuario no debe tener más de 2 libros con multas.
- Se registrarán la fecha de préstamo y la fecha de regreso (8 días después de la fecha de préstamo).

## Usuarios

Los usuarios registrados podrán iniciar sesión en el sistema y acceder a sus préstamos activos y su historial de libros solicitados. Esto les permitirá verificar si tienen multas pendientes.

## Estructura proyecto

- El proyecto sigue una estructura de directorios recomendada para una aplicación Node.js con Express. A continuación se describe brevemente cada uno de los directorios principales:

- **controllers**: Contiene los controladores de la aplicación que manejan la lógica de negocio y las interacciones con los modelos de datos.
- **models**: Contiene los modelos de datos de la aplicación que se utilizan para interactuar con la base de datos.
- **routes**: Contiene las definiciones de las rutas de la aplicación que manejan las solicitudes HTTP y llaman a los controladores correspondientes.
- **services**: Contiene los servicios de la aplicación que encapsulan la lógica de negocio y se utilizan para realizar operaciones más complejas que no pertenecen estrictamente a los controladores.
- **app.js**: El archivo principal de la aplicación que configura y arranca el servidor Express.
- **package.json**: El archivo de configuración del proyecto que contiene las dependencias, scripts y otra información relevante.

## Dependencias principales

El proyecto utiliza las siguientes dependencias principales:

- Express: Framework web rápido y minimalista para Node.js.
- Cors: Middleware que proporciona compatibilidad con CORS (Cross-Origin Resource Sharing) en Express, permitiendo que tu servidor acepte solicitudes HTTP desde dominios diferentes al dominio del servidor. Es especialmente útil cuando tienes una API que es consumida desde un cliente en un dominio distinto.
- Dotenv: Módulo que facilita la carga de variables de entorno desde archivos .env. Las variables de entorno son especialmente útiles para almacenar información sensible o configuraciones específicas para diferentes entornos (como credenciales de bases de datos, claves de API, etc.) y permiten que tu aplicación sea más segura y configurable.
- Mongoose: Biblioteca de modelado de objetos MongoDB para Node.js que proporciona una forma sencilla y flexible de interactuar con bases de datos MongoDB. Mongoose permite definir esquemas y modelos para tus datos y proporciona una API para realizar consultas y operaciones en la base de datos.

## Consideraciones finales

Este proyecto es de carácter acádemico para poner en práctica los conocimientos adquiridos durante el desarrollo de las primeras semanas del curso de desarrollo de software - Electiva II.
Realizado por:

- Andrés Iván Sierra Espinel
- Hovar Steven Rincón Vianchá

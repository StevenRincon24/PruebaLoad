# Biblioteca Municipal - Gestión de Libros, Empleados y Préstamos

Este proyecto es un software desarrollado en Node.js con el framework Express y el motor de vistas EJS. Su objetivo principal es ayudar a la gestión de libros, empleados y préstamos en una biblioteca municipal. Proporciona un sistema completo de CRUD (Crear, Leer, Actualizar y Eliminar) para administrar los datos asociados a los empleados, libros y servicios de la biblioteca.

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
- La multa se calculará en base a una tarifa diaria establecida para cada libro.
- Además, los empleados también podrán recibir los libros prestados y cambiar el estado del préstamo a "terminado" cuando los usuarios devuelvan los libros.

## Usuarios
Los usuarios registrados podrán iniciar sesión en el sistema y acceder a sus préstamos activos y su historial de libros solicitados. Esto les permitirá verificar si tienen multas pendientes.

## Requisitos de Instalación
Para instalar y ejecutar el proyecto localmente, se deben seguir los siguientes pasos:

- Clonar este repositorio: git clone <URL del repositorio>
- Ingresar al directorio del proyecto: cd biblioteca-municipal
- Instalar las dependencias: npm install
- Configurar las variables de entorno:
- Crear un archivo .env en el directorio raíz del proyecto
- Configurar las variables de entorno necesarias en el archivo .env (consultar el archivo .env.example para obtener la lista de variables requeridas)
- Iniciar la aplicación: npm start
- Acceder a la aplicación en el navegador web: http://localhost:4000
- Estructura del Proyecto
- El proyecto sigue una estructura de directorios recomendada para una aplicación Node.js con Express. A continuación se describe brevemente cada uno de los directorios principales:

- **controllers**: Contiene los controladores de la aplicación que manejan la lógica de negocio y las interacciones con los modelos de datos.
- **models**: Contiene los modelos de datos de la aplicación que se utilizan para interactuar con la base de datos.
- **routes**: Contiene las definiciones de las rutas de la aplicación que manejan las solicitudes HTTP y llaman a los controladores correspondientes.
- **views**: Contiene las vistas de la aplicación escritas en EJS (Embedded JavaScript) que se utilizan para generar la interfaz de usuario.
- **public**: Contiene archivos estáticos como hojas de estilo CSS, scripts de JavaScript y otros recursos que se sirven directamente al navegador.
- **services**: Contiene los servicios de la aplicación que encapsulan la lógica de negocio y se utilizan para realizar operaciones más complejas que no pertenecen estrictamente a los controladores.
- **app.js**: El archivo principal de la aplicación que configura y arranca el servidor Express.
- **package.json**: El archivo de configuración del proyecto que contiene las dependencias, scripts y otra información relevante.

## Dependencias principales
El proyecto utiliza las siguientes dependencias principales:

- Express: Framework web rápido y minimalista para Node.js.
- EJS: Motor de plantillas para generar las vistas en HTML basado en JavaScript.

## Consideraciones finales

Este proyecto es de carácter acádemico para poner en práctica los conocimientos adquiridos durante el desarrollo de las primeras semanas del curso de desarrollo de software - Electiva II.

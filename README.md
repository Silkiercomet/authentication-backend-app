# my process

## sign up

esta applicacion es una autenticacion basica qe hace algunas cosas de manera en que podria mejorarse, esta funcion registra por su nombre de usuarion y genera un token temporal luego del registro y lo guardar en una base da datos (el nombre de usuario y la contraseña encriptada) en mongoDB con la estructura del Schema creado para los usuarios

## log in

luego para logearse la aplicacion revisa si el usuario existe esta encripta la contraseña dada y la compara con la que se encuentra en la base de datos como la perteneciente a la cuenta, si la comparacion coincide entonces se autorizara un token que le permitira acceder a las rutas permitidas solo a usuarios autorizados

### resumen

el proceso de autorizacion podria resumirse en

- crear una entrada inicial con los identificadores (contraseña, nombre) / sign up

- cuando se quiera autenticar a un usuario se debe buscar la entrada inicial y comparar los datos dados con los iniciales (el nombre de usuarion y la contraseña encriptada) si coinciden se sigue la operacion

- se devuelve un token que es comprobado en cada ruta que sea necesaria mientras el token no haya expirado
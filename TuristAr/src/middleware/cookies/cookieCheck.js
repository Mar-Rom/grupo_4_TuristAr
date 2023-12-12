// checkCookie.js
// module.exports = (req, res, next) => {
//     if (req.cookies.SesionUser) {
//         req.session.userLoged = req.cookies.SesionUser;
//     }
//     next();
// };
module.exports = (req, res, next) => {
    const sessionUser = req.cookies.SesionUser;

    // Comprobar si la cookie "sessionUSer" existe
    if (sessionUser) {
        try {
            const userData = JSON.parse(sessionUser);

            // Verificamos si el objeto userData contiene propiedades esperadas (id, name, role)
            if (userData && userData.id && userData.name) {
                // Si la cookie es válida, establecer userData en la sesión de la solicitud
                req.session.userLogin = userData;
            } else {
                // Imprimir un mensaje en la consola si la cookie es inválida debido a datos faltantes
                console.log('Cookie inválida. Datos faltantes.');
            }
        } catch (error) {
            
            console.error('Error al analizar la cookie:', error);
        }
    }

    next();
};

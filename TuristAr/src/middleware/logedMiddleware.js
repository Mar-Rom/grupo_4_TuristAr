const logedMiddleware = (req, res, next) => {
    res.locals.anUser = false;

    if (req.session && req.session.userLoged) {
        res.locals.anUser = true;
        res.locals.userData = req.session.userLoged;

        console.log(res.locals)
    }

    next();
};

module.exports= logedMiddleware;


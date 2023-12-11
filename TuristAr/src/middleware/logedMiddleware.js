const logedMiddleware = (req, res, next) => {
    res.locals.anUser = false;

    if (req.session && req.session.userLoged) {
        console.log("si se inicio owo")
        res.locals.anUser = true;
        res.locals.userData = req.session.userLoged;

        // console.log(res.locals)
    }else{
        console.log("no se inicio session")
    }
    next();
};

module.exports= logedMiddleware;


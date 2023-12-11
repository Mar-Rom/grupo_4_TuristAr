// userSessionCheck.js
module.exports = (req, res, next) => {
    res.locals.userLogin = req.session.userLoged 
    next();
};

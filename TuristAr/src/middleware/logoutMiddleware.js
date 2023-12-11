module.exports = (req,res) => {
    req.session.destroy();
    res.cookie('SesionUser', null, {
        maxAge: -1
    });
    return res.redirect('/')
}
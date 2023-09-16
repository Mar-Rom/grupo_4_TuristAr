module.exports = {
    home: (req, res) => {
        res.render('home');
    },
    login : (req, res) => {
        res.render('login')
        },
    
        register: (req, res) => {
        res.render('Register')
        },
        user: (req, res) => {
        res.redirect('home')
        },
        valid: (req, res) => {
        res.render('Valid')
        }
}
module.exports = {
    datos: (req, res) => {
        res.render ('carrito')
    },
    pago: (req, res) => {
        res.render ('carrito2')
    },
    resumen: (req, res) => {
        res.render ('carrito3')
    }
}
module.exports = {
    datos: (req, res) => {
        res.render ('carrito1')
    },
    pago: (req, res) => {
        res.render ('carrito2')
    },
    resumen: (req, res) => {
        res.render ('carrito3')
    }
}
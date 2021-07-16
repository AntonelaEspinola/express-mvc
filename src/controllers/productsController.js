const path = require('path');
const products = require('../data/dbProducts');



module.exports = {
     list : (req,res) => {
         res.rend('productsList',{
             title: 'Lista de productos'
         });
     },
     //res.sendFile(path.join(__dirname, '..', 'views', 'productsList.html')),
    detail : (req, res) => {
        // return res.sendFile(path.join(__dirname, '..', 'views', 'productDetail.html'))
       

        let product = products.find(producto => producto.id === +req.params.id); 
        return res.send(product);
    },
    sale : (req,res) => {
        let productos = products.filter(producto=> producto.category == 'in-sale')
    return res.send(productos)
    },
    add : (req, res) => {

    },
    save :(req, res) => {

    },
    edit :(req, res) => {

    },
    update :(req, res) => {

    },
    remove :(req, res) => {

    }
}
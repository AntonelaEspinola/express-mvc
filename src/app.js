const express = require('express');
const app = express();
const path = require('path');
const port = 3033;
//configuro el 
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'))
//recursos estaticos
app.use(express.static('../public'));

//enrutadores
//requiero y armo ruta de index
const indexRouter = require('./routes/indexRouter');

//cuando la ruta sea / se encarga indexRouter
app.use('/', indexRouter);

//requiero y armo ruta de user
const productRouter = require('./routes/products');
app.use('/products', productRouter);

const usersRouter = require('./routes/users');
app.use('/users', usersRouter)

// servidor
app.listen(port, () => console.log(`Server running in http://localhost:${port}`));

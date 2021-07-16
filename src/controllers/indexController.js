
module.exports ={
     index : (req,res) => {
        return res.render('home', {
            title : 'BerenjeNET',
            nombre : 'Antonela',
            peliculas: ['Iroman', 'Atman', 'Spiderman'],
            enOferta: true,
            genero: 'Accion'
       })
     }
  
} 
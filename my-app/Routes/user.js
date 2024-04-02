const express= require ('express');
const connection = require('../connection')
const router = express.Router()

//getting the element
router.get('/', (req, res, next)=>{
    var query=('select * from products')
    connection.query(query,((err, result)=>{
        if(!err){
            return res.render('index', { result });
        }else{
            return res.status(500).json(err)
        }
    })) 
})


router.get('/update/:id', (req, res, next) => {
    var id = req.params.id
    var query=('select * from products where id=?')
    connection.query(query,[id],((err, result)=>{
        if(!err){
            return res.render('update.ejs',{result});
        }else{
            return res.status(500).json(err)
        }
    })) 
    
});


//update the element
router.post('/process/:id', (req, res, next)=>{
    var product = req.body;
    var id=req.params.id
    if (Object.keys(product).length > 0) {
        var query = 'update products set id=?, name=?, description=?, price=?, stock=? where id=? ';
        connection.query(query, [product.id, product.name, product.description, product.price, product.stock, id], (err, result) => {
            if (!err) {
                return res.redirect('/')
            } else {
                return res.status(404).json(err);
            }
        });
    }else{
        return res.status(404);
    }
})


router.get('/delete/:id', (req, res)=>{
    const id = req.params.id
    var query = ('delete from products where id=?');
    connection.query(query, [id], (err, result)=>{
        if(!err){
            return res.redirect('/')
        }else{
            return res.status(404);
        }
    })
})

router.get('/add', (req, res)=>{
  res.render('add.ejs');
})


router.post('/adding', (req, res)=>{
    const product = req.body;
    var query= 'insert into products (id, name, description, price, stock) values  (NULL, ?, ?, ?, ?)'
    connection.query(query, [product.name, product.description, product.price, product.stock], (err, result)=>{
        if(!err){
            return res.redirect('/')
        }else{
            return res.status(404).json(err);
        }
    })
})


module.exports=router
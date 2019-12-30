var express = require('express');
var router = express.Router();
const Product = require('../models/Product');
const errorHandler = require('../handler/error-handler')
const objection = require('objection');

/* GET home page. */
router.get('/', async (req, res, next) => {
  // res.render('index', { title: 'Brand' });
  Product.getData().then(product => {
    console.log(product);
    res.json(product);
  });
  // await Product.query().then(product => {
  //   res.json({
  //     success: true,
  //     data: product, 
  //   });
  // }).catch(error => {
  //   res.send(error);
  // });

});

router.get('/:id', (req, res, next) => {
  // Product.getDataById().then(product => {
  //   res.json(product);
  // });
  Product.query().findById(req.params.id).then((brand, error) => {  
    // errorHandler(error, res)
    
    res.json({
      data: brand,
      error: error
    })
  });
});

router.post('/', async (req, res, next) => {
  const body = req.body
  try {
    const res = await  Product.query().insert({ name: 'jennifer' });
    res.json(res);
  } catch (err) {
    console.log(err instanceof objection.ValidationError); // --> true
    console.log(err.data); // --> {lastName: [{message: 'required property missing', ...}]}
    res.json(err);
  }
  
  // res.json(req.body);
  // const newBrand = await Brand.query().insert(req.body);
})

router.delete('/:id', async (req, res, next) => {
  const response = await Brand.query().deleteById(req.params.id);
  res.json(response)
})

module.exports = router;

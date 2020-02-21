var express = require('express');
var router = express.Router();
const Product = require('../models/product.model');
const objection = require('objection');
const errorHandler = require('../utils/error-handler');

// * SELECT ALL
router.get('/', async (req, res, next) => {
  // res.render('index', { title: 'Brand' });
  Product.getData().then(product => {
    console.log('product: ')
    // console.log(product);
    res.json(product);
  }).catch(err => errorHandler(err, res));
});

// * SELECT BY ID
router.get('/:id', (req, res, next) => {
  Product.getDataById(req.params.id).then(product => { 
    res.json(product);
  }).catch(err => errorHandler(err, res));
});

router.post('/', async (req, res, next) => {
  const body = req.body
  try {
    const res = await  Product.query().insert({ name: 'jennifer' });
    res.json(res);
  } catch (err) { errorHandler(err, res) };
})

router.delete('/:id', async (req, res, next) => {
  const response = await Brand.query().deleteById(req.params.id);
  res.json(response)
})

module.exports = router;

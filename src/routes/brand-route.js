const express = require('express');
const router = express.Router();
const Brand = require('../models/Brand');
const errorHandler = require('../handler/error-handler');
const objection = require('objection');

/* GET home page. */
router.get('/', async (req, res, next) => {
  // res.render('index', { title: 'Brand' });
  await Brand.query().then(brand => {
    res.json({
      success: true,
      data: brand, 
    });
  }).catch(error => {
    res.send(error);
  });

});

router.get('/:id', (req, res, next) => {
  Brand.query().findById(req.params.id).then((brand, error) => {  
    // errorHandler(error, res)
    
    res.json({
      data: brand,
      error: error
    })
  });
});

router.post('/', async (req, res, next) => {
  // res.json(req.body);
  // const newBrand = await Brand.query().insert(req.body);
  // res.json(newBrand);
  const body = req.body
  try {
    const res = await  Brand.query().insert({ sine: 'jennifer' });
    res.json(res);
  } catch (err) {
    console.log(err instanceof objection.ValidationError); // --> true
    console.log(err.data); // --> {lastName: [{message: 'required property missing', ...}]}
    res.json(err);
  }
})

router.delete('/:id', async (req, res, next) => {
  const response = await Brand.query().deleteById(req.params.id);
  res.json(response)
})

module.exports = router;

var express = require('express');
var router = express.Router();
const Brand = require('../models/Brand');

/* GET home page. */
router.get('/', async (req, res, next) => {
  // res.render('index', { title: 'Brand' });
  const brand = await Brand.query();
  res.json(brand);

});

router.get('/:id', (req, res, next) => {
  const brands = Brand.query().findById(req.params.id)
  res.json(brands)
});

router.post('/', async (req, res, next) => {
  // res.json(req.body);
  const newBrand = await Brand.query().insert(req.body);
  res.json(newBrand);
})

router.delete('/:id', async (req, res, next) => {
  const response = await Brand.query().deleteById(req.params.id);
  res.json(response)
})

module.exports = router;

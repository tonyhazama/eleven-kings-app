const express = require('express');
const router = express.Router();
const Brand = require('../models/brand.model');
const objection = require('objection');

// * Select all data
router.get('/', async (req, res, next) => {
  Brand.getData().then(brand => {
    // console.log(brand);
    res.json(brand);
  })

});

// * Select data by id
router.get('/:id', (req, res, next) => {
  Brand.getDataById(req.params.id).then(brand => {
    // console.log(brand);
    res.json(brand);
  }).catch(err => res.json(err))
});

// * Insert data
router.post('/', (req, res, next) => {
  const body = req.body
  Brand.addData(body).then((result) => {
    res.json(result)
  }).catch(err => res.json(err))
})

router.delete('/:id', async (req, res, next) => {
  const response = await Brand.query().deleteById(req.params.id);
  res.json(response)
})

module.exports = router;

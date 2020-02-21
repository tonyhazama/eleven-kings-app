

function BadRequest(req, res, next) {
  res.status(400).send({
    status: 400,
    code: 'BadRequest',
    message: '400 Bad Request'
  });
  next();
}

module.exports = {BadRequest}
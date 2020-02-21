const {
  ValidationError,
  NotFoundError,
  DBError,
  ConstraintViolationError,
  UniqueViolationError,
  NotNullViolationError,
  ForeignKeyViolationError,
  CheckViolationError,
  DataError
} = require('objection');

// In this example `res` is an express response object.
function errorHandler(err, res) {
  if (err instanceof ValidationError) {
    switch (err.code) {
      case 'ModelValidation':
        res.status(400).send({
          status: 400, 
          code: err.code,
          message: err.message,
          data: err.data
        });
        break;
      case 'RelationExpression':
        res.status(400).send({
          status: 400, 
          code: 'RelationExpression',
          message: err.message,
        });
        break;
      case 'UnallowedRelation':
        res.status(400).send({
          status: 400, 
          code: err.code,
          message: err.message,
        });
        break;
      case 'InvalidGraph':
        res.status(400).send({
          status: 400, 
          code: err.code,
          message: err.message,
        });
        break;
      default:
        res.status(400).send({
          status: 400, 
          code: 'UnknownValidationError',
          message: err.message,
        });
        break;
    }
  } else if (err instanceof NotFoundError) {
    res.status(404).send({
      status: 404, 
      code: 'NotFound',
      message: 'Data Not Found',
    });
  } else if (err instanceof UniqueViolationError) {
    res.status(409).send({
      status: 409, 
      code: 'UniqueViolation',
      message: err.message,
      data: {
        columns: err.columns,
        table: err.table,
        constraint: err.constraint
      }
    });
  } else if (err instanceof NotNullViolationError) {
    res.status(400).send({
      status: 400, 
      code: 'NotNullViolation',
      message: err.message,
      data: {
        column: err.column,
        table: err.table
      }
    });
  } else if (err instanceof ForeignKeyViolationError) {
    res.status(409).send({
      status: 409, 
      code: 'ForeignKeyViolation',
      message: err.message,
      data: {
        table: err.table,
        constraint: err.constraint
      }
    });
  } else if (err instanceof CheckViolationError) {
    res.status(400).send({
      status: 400, 
      code: 'CheckViolation',
      message: err.message,
      data: {
        table: err.table,
        constraint: err.constraint
      }
    });
  } else if (err instanceof DataError) {
    res.status(400).send({
      status: 400, 
      code: 'InvalidData',
      message: err.message,
    });
  } else if (err instanceof DBError) {
    res.status(500).send({
      status: 500, 
      code: 'UnknownDatabaseError',
      message: err.message,
    });
  } else {

    res.status(500).send(err);
  }
}

module.exports = errorHandler;
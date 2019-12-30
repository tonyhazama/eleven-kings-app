const { BaseModel } = require('./BaseModel');


class Product extends BaseModel {
  static get tableName() { return 'product'; }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        brandId: { type: 'string' },
        name: { type: 'string' },
        description: { type: 'string' },
        price: { type: 'float' },
        createdAt: { type: 'string' },
        updatedAt: { type: 'string' },
      }
    }
  }

}

module.exports = Product;

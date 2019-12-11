const { Model } = require('objection');

class Product extends Model {
  static get tableName() {
    return 'brand';
  }

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

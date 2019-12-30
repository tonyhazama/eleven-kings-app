const { BaseModel } = require('./BaseModel');

class Brand extends BaseModel {
  static get tableName() { return 'brand'; }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'foundedDate'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 2, maxLength: 256 },
        foundedDate: { type: 'date', maxLength: 10},
        createdAt: { type: 'date' },
        updatedAt: { type: 'date' },
      }
    }
  }

  static get relationMappings() {
    const Product = require('./Person');
    return {
      brandProducts: {
        relation: Model.HasManyRelation,
        modelClass: Product,
        join: {
          from: 'brand.id',
          to: 'product.brandId'
        }
      }
    }
  }
}

module.exports = Brand;

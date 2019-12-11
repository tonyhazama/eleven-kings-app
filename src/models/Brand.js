const { Model } = require('objection');

class Brand extends Model {
  static get tableName() {
    return 'brand';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        brandName: { type: 'string' },
        foundedDate: { type: 'string' },
        // createdAt: { type: 'string' },
        // updatedAt: { type: 'number' },
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

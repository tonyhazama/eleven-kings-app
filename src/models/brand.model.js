const { BaseModel } = require('./base-model.model');
const { Model } = require('objection');

class Brand extends BaseModel {
  static get modifiers() {
    return {
      defaultSelects(query) {
        query.select('id', 'name');
      }
    }
  }

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
    const Product = require('./product.model');
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

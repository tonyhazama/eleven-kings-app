const { BaseModel } = require('./base-model.model');
const { Model } = require('objection');
const Brand = require('./brand.model')

class Product extends BaseModel {
  static get tableName() { return 'product'; }

  static get modifiers() {
    return {
      defaultSelects(query) {
        query.select('product.*', 'ownerBrand.name as brandName')
        .joinRelated('ownerBrand');
      }
    }
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

  static get relationMappings() {
    return {
      ownerBrand: {
        relation: Model.BelongsToOneRelation,
        modelClass: Brand,
        join: {
          from: 'product.brandId',
          to: 'brand.id'
        }
      }
    }
  }

}

module.exports = Product;

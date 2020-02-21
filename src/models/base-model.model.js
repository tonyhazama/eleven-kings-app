const { Model } = require('objection');

class BaseModel extends Model {
  static get modifiers() {
    return {
      defaultSelects(query) {
        const keys = this.schemaColumns;
        (query.select).apply(this, keys);
      }
    }
  }

  static get modelPaths() {
    return [__dirname];
  }

  static get schemaColumns() {
    const {properties} = this.jsonSchema;
    return !!properties ? Object.keys(properties) : null;
  }
  
  static getData() {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await this.query().modify('defaultSelects').throwIfNotFound();
        resolve({ success: true, data: data });
      } catch(error) { reject(error); }
    })
  }

  static getDataById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await this.query().modify('defaultSelects').findById(id).throwIfNotFound();
        resolve({ success: true, data: data });
      } catch(error) { reject(error); }
    })
  }

  // static handleQuery(obj) {
  //   if ()
  // }

  static addData(data) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(data);
        const res = await this.query().insert(data);
        console.log(res);
        resolve(res);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    })
  }

  $beforeInsert() {
    this.createdAt = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }

}

module.exports = {
  BaseModel
};

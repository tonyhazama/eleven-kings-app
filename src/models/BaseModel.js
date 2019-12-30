const { Model } = require('objection');

class BaseModel extends Model {

  static get modelPaths() {
    return [__dirname];
  }
  
  static getData() {
    return new Promise((resolve, reject) => {
      this.query().then(data => {
        resolve({
          success: true,
          data: data, 
        });
      }).catch(error => {
        reject(error);
      });
    })
  }

  static getDataById(id) {
    return new Promise((resolve, reject) => {
      this.query().findById(id).then(data => {
        resolve({
          success: true,
          data: data, 
        });
      }).catch(error => {
        reject(error);
      });
    })
  }

  static addData(data) {
    return new Promise((resolve) => {

    })
  }

}

module.exports = {
  BaseModel
};

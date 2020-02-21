const indexRouter = require('./index.route');
const usersRouter = require('./users.route');
const brandRouter = require('./brand.route');
const productRouter = require('./product.route');

module.exports = {indexRouter, usersRouter, brandRouter, productRouter};

// const routeHandler = ({ path, callback, method }) => {
//   router.route(path)[method](async (req, res, next) => {
//     try {
//       await callback(req, res, next);
//     } catch (error) {
//       next(error);
//     }
//   });
// };
const Error = require('../views/Error');

module.exports = function isAdmin(req, res, next) {
  const user = req.session?.user;
  if (!user || user.role !== 'ADMIN') {
    res.render(Error, {
      message: "You don't have access",
      error: {},
    });
  } else {
    next();
  }
};
 
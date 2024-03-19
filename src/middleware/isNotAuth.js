const Error = require('../views/Error');

module.exports = function isNotAuth(req, res, next) {
  const user = req.session?.user?.name;
  if (!user) {
    next();
  } else {
    res.render(Error, {
      message: 'You are already authorized',
      error: {},
    });
  }
};

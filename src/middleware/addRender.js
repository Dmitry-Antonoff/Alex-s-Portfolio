const render = require('../lib/render');

const addRender = (req, res, next) => {
  res.render = (reactComponent, props) => {
    render(reactComponent, { ...props, user: req.session?.user }, res);
  };
  next();
};

module.exports = addRender;
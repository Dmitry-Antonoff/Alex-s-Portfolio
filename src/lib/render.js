const ReactDomServer = require('react-dom/server');
const React = require('react');

const renderComponent = (reactElement, properties, response) => {
  const reactEl = React.createElement(reactElement, { ...properties });
  const html = ReactDomServer.renderToStaticMarkup(reactEl);
  response.send(`<!DOCTYPE html>${html}`);
};

module.exports = renderComponent;
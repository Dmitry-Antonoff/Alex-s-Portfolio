const React = require('react');
const Layout = require('./Layout');

module.exports = function Error(props) {
  const { message, error } = props;
  return (
    <Layout {...props}>
      <h1 className='error-text'>{message}</h1>
      <h2 className='error-text'>{error.status}</h2>
    </Layout>
  );
};

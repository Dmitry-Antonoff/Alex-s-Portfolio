const React = require('react');
const Layout = require('./Layout');

module.exports = function Login(props) {
  return (
    <Layout {...props}>
      <div className="div-form">
        <h1 className="form-h1">Login</h1>
        <form className="form" name="login">
          <p className="form-p">Email</p>
          <input className="form-input" type="text" placeholder="Enter your email" name="email" />
          <p className="form-p">Password</p>
          <input
            className="form-input"
            type="password"
            placeholder="Enter your password"
            name="password"
          />
          <div>
            <input className="checkbox" type="checkbox" value="lsRememberMe" id="logRememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button className="button form-submit-btn" type="submit">
            LogIn
          </button>
        </form>
      </div>
    </Layout>
  );
};

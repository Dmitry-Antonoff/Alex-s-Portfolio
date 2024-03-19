const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration(props) {
  const {} = props;
  return (
    <Layout {...props}>
      <div className="div-form">
        <h1 className="form-h1">Registration</h1>
        <form className="form" name="registration">
          <p className="form-p">Name</p>
          <input className="form-input" type="text" placeholder="Enter your name" name="userName" />
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
            <input className="checkbox" type="checkbox" value="lsRememberMe" id="regRememberMe" />
            <label for="rememberMe">Remember me</label>
          </div>
          <button className="button form-submit-btn" type="submit">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

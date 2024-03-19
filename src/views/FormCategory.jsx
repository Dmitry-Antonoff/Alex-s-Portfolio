const React = require('react');
const Layout = require('./Layout');

module.exports = function FormCategory(props) {
  const {name} = props;
  return (
    <Layout {...props}>
      <div className="div-form">
        <h1 className="form-h1">Add Category</h1>
        <form className='form' name="category">
          <p className='form-p'>Category name </p>
          <input
            className="form-input"
            type="text"
            placeholder="Enter category name"
            name="categoryName"
          />
          <button className="button form-submit-btn" type="submit">
            Add
          </button>
        </form>
      </div>
    </Layout>
  );
};

const React = require('react');
const Layout = require('./Layout');

module.exports = function FormCategoryEdit(props) {
  const { category } = props;
  return (
    <Layout {...props}>
      <div className="div-form">
        <h1 className="form-h1">Edit Category</h1>
        <form
          data-categoryid={category.id}
          className="form"
          name="categoryEdit"
        >
          <p className="form-p">Category name </p>
          <input
            className="form-input"
            type="text"
            placeholder="Enter category name"
            value={category.categoryName}
            name="categoryName"
          />
          <button className="button form-submit-btn" type="submit">
            Edit
          </button>
        </form>
      </div>
    </Layout>
  );
};

const React = require('react');
const Layout = require('./Layout');

module.exports = function FormPhoto(props) {
  const {category} = props;
  return (
    <Layout {...props}>
      <div className="div-form">
        <h1 className="form-h1">Add Photo</h1>
        <form data-categoryname={category.categoryName} name='photoCreate' className="form"  enctype="multipart/form-data">
          <p className="form-p">Photo name </p>
          <input
            className="form-input"
            type="text"
            placeholder="Enter photo name"
            name="photoName"
          />
          <p className="form-p">Description </p>
          <textarea className="form-input" placeholder="Enter description" name='description' />
          <label className="selectImg button " for="inputTag">
            Select Image
            <input type="file" name="photo" id="inputTag" />
            <span id="imageName"></span>
          </label>
          <button className="button form-submit-btn" type="submit">
            Add
          </button>
        </form>
      </div>
    </Layout>
  );
};
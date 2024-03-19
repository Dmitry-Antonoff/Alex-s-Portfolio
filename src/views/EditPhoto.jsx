const React = require('react');
const Layout = require('./Layout');

module.exports = function EditPhoto(props) {
  const { category, photo } = props;
  return (
    <Layout {...props}>
      <div className="div-form">
        <h1 className="form-h1">Edit Photo</h1>
        <form
          data-categoryname={category.categoryName}
          data-photoid={photo.id}
          className="form"
          name="photoEdit"
        >
          <p className="form-p">Photo name </p>
          <input
            className="form-input"
            type="text"
            placeholder="Enter photo name"
            name="photoName"
            value={photo.name}
          />
          <p className="form-p">Description </p>
          <textarea
            className="form-input"
            placeholder="Enter description"
            name="description"
            value={photo.description}
          />
          <button className="button form-submit-btn" type="submit">
            Edit
          </button>
        </form>
      </div>
    </Layout>
  );
};

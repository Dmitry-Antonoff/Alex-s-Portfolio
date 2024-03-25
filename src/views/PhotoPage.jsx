const React = require('react');
const Layout = require('./Layout');

module.exports = function PhotoPage(props) {
  const { photo, category, user } = props;
  return (
    <Layout {...props}>
      <div className="photo-card">
        <div className="photo-div">
          <img src={`${photo.photoPath}`} alt={`${photo.name}`} />
          <div className="photo-text">
            <p className="photo-name">{photo.name}</p>
            <p className="photo-description">{photo.description}</p>
          </div>
        </div>
        {user?.role === 'ADMIN' && (
          <div className="photo-buttons">
            <a href={`/portfolio/${category.categoryName}/${photo.id}/edit`} className="button">
              Edit
            </a>
            <button type="button" className="button" id="deletePhoto" data-photoid={photo.id}>
              Delete
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

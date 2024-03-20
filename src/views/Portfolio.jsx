const React = require('react');
const Layout = require('./Layout');

module.exports = function Portfolio(props) {
  const { categories, user } = props;

  return (
    <Layout {...props}>
      {user?.role === 'ADMIN' ? (
        <a href="/portfolio/new-category" className="button addCategory">
          Add Category
        </a>
      ) : (
        <></>
      )}

      <div className="portfolio">
        {categories?.map((category) => (
          <div className="portfolio-section" id={`category-${category.id}`}>
            <div className="portfolio-nav">
              <div className="portfolio-text-div">
                <h2 className="portfolio-subtitle">{category.categoryName}</h2>
              </div>
              <div className="portfolio-nav-buttons">
                <div className="left-right-buttons">
                  <button className="button circle-btn first-circle portfolio-prev">
                    <img src="/img/left.svg" />
                  </button>
                  <button className="button circle-btn last-circle portfolio-next">
                    <img src="/img/right.svg" />
                  </button>
                </div>
                {user?.role === 'ADMIN' ? (
                  <>
                    <a data-categoryid={category.id} className="button">
                      Delete Category
                    </a>
                    <a href={`/portfolio/${category.categoryName}/edit`} className="button">
                      Edit Category
                    </a>
                  </>
                ) : (
                  <></>
                )}
                <a href={`/portfolio/${category.categoryName}`} className="button">
                  View All Photos &rarr;
                </a>
              </div>
            </div>
            <div className="portfolio-widget portfolio-slider">
              {category.Photos?.map((photo) => (
                <div className="card">
                  <div className="div-card-img">
                    <img className="photo-img" src={`${photo.photoPath}`} alt="photo" />
                  </div>
                  <div className="card-description" data-id={photo.id}
                      data-categoryname={category.categoryName}>
                    <h3>{photo.name}</h3>
                    {user ? (
                    <svg
                      data-id={photo.id}
                      data-categoryname={category.categoryName}
                      className={photo.Likes.length > 0 ? 'like liked' : 'like'}
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="100"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.48 5.48 0 0 0 0-7.78z"
                        fill="red"
                      ></path>
                    </svg>
                  ) : (<></>)}
                    <a
                      className="view-card"
                      href={`/portfolio/${category.categoryName}/${photo.id}`}
                    >
                      <p>VIEW PROJECT</p>
                      <img src="/img/arrow-up.svg" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
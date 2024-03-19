const React = require('react');
const Layout = require('./Layout');

module.exports = function Home(props) {
  const { categories, user } = props;

  return (
    <Layout {...props}>
      <div className="landing-types-collage">
        <div className="landing">
          <div>
            <h4 className="landing-h4">STUNNING PHOTOGRAPHY BY</h4>
            <h1 className="landing-h1">ALEX'S PORTFOLIO</h1>
          </div>
        </div>
        <div className="types-collage">
          <div className="photo-types">
            <div className="type-cell">
              <img className="star-icon" src="img/star.svg" />
              <p className="type-photo">EVENT PHOTOGRAPHY</p>
            </div>
            <div className="type-cell">
              <img className="star-icon" src="img/star.svg" />
              <p className="type-photo">COMERCIAL PHOTOGRAPHY</p>
            </div>
            <div className="type-cell">
              <img className="star-icon" src="img/star.svg" />
              <p className="type-photo">PRODUCT PHOTOGRAPHY</p>
            </div>
            <div className="type-cell">
              <img className="star-icon" src="img/star.svg" />
              <p className="type-photo">WEDDING PHOTOGRAPHY</p>
            </div>
            <div className="type-cell">
              <img className="star-icon" src="img/star.svg" />
              <p className="type-photo">LANDSCAPE PHOTOGRAPHY</p>
            </div>
            <div className="type-cell">
              <img className="star-icon" src="img/star.svg" />
              <p className="type-photo">BRANDING PHOTOGRAPHY</p>
            </div>
            <div className="type-cell">
              <img className="star-icon" src="img/star.svg" />
              <p className="type-photo">PORTRAIT PHOTOGRAPHY</p>
            </div>
          </div>
          <div className="collage">
            <img className="collage-img" src="/img/Images-Container.png" alt="collage" />
          </div>
        </div>
      </div>
      <div className="portfolio-section">
        <div className="portfolio-nav">
          <div className="portfolio-text-div">
            <h4 className="portfolio-title">PORTFOLIO</h4>
            <h2 className="portfolio-subtitle">EXPLORE MY PHOTOGRAPHY WORK.</h2>
          </div>
          <div className="portfolio-nav-buttons">
            <div className="left-right-buttons">
              <button className="button circle-btn first-circle portfolio-prev">
                <img src="img/left.svg" />
              </button>
              <button className="button circle-btn last-circle portfolio-next">
                <img src="img/right.svg" />
              </button>
            </div>
            <button className="button margin-l-20" id="allWorks">
              View All Works &rarr;
            </button>
          </div>
        </div>
        <div className="portfolio-widget portfolio-slider">
          {categories.map((category) =>
            category.Photos.map((photo) => (
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

                  <a className="view-card" href={`/portfolio/${category.categoryName}/${photo.id}`}>
                    <p>VIEW PROJECT</p>
                    <img src="img/arrow-up.svg" />
                  </a>
                </div>
              </div>
            )),
          )}
        </div>
      </div>
    </Layout>
  );
};

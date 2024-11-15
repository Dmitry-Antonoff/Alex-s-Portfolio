const React = require('react');

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        <link rel="stylesheet" href="/stylesheets/normalize.css" />
        <link rel="stylesheet" href="/stylesheets/style.css" />
        <link rel="stylesheet" type="text/css" href="/stylesheets/slick.css" />
        <link rel="stylesheet" type="text/css" href="/stylesheets/slick-theme.css" />

        <script defer src="/js/application.js" />
        <script defer src="/js/auth.js" />
        <script defer src="/js/category.js" />
        <script defer src="/js/photo.js" />
        <script defer src="/js/like.js" />

        <title>ALEX&apos;S PORTFOLIO</title>
      </head>

      <body>
        <header className="header">
          <nav className="navbar">
            <img src="/img/alantonovphotographerwhite.svg" alt="logo" className="logo-image" />
            <div className="navbar-container">
              <button type="button" className="navbar-button l-t-border-radius" id="home">
                Home
              </button>
              <button type="button" className="navbar-button r-t-border-radius" id="portfolio">
                Portfolio
              </button>
            </div>
            <div className="btn-log-reg">
              {user ? (
                <>
                  <a className=" margin-r-20" href="/auth/logout">
                    <button type="button" className="button">
                      Logout
                    </button>
                  </a>
                  <p className="userName">{user.userName}</p>
                </>
              ) : (
                <>
                  <a className="margin-r-20" id="login" href="/auth/login">
                    <button type="button" className="button">
                      LogIn
                    </button>
                  </a>

                  <a id="reg" href="/auth/registration">
                    <button type="button" className="button">
                      Registration
                    </button>
                  </a>
                </>
              )}
            </div>
            <div className="hamburger-menu">
              <input id="menu__toggle" type="checkbox" />
              <label className="menu__btn" htmlFor="menu__toggle">
                <span />
              </label>
              <ul className="menu__box">
                <li className="first-li">{user && <p className="userName">{user.userName}</p>}</li>
                <li>
                  <a className="menu__item" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="menu__item" href="/portfolio">
                    Portfolio
                  </a>
                </li>
                {user ? (
                  <li>
                    <a className="menu__item" href="/auth/logout">
                      Logout
                    </a>
                  </li>
                ) : (
                  <>
                    <a className="margin-r-20 menu__item" id="login" href="/auth/login">
                      LogIn
                    </a>

                    <a id="reg" className="menu__item" href="/auth/registration">
                      Registration
                    </a>
                  </>
                )}
              </ul>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="footer-data">
            <a href="/">Terms & Conditions</a>
            <p>|</p>
            <a href="/">Privacy Policy</a>
          </div>
          <div className="footer-btn-div pc">
            <a href="https://www.instagram.com/ant.alex.photo/">
              <button type="button" className="button footer-btn circle-btn first-circle ">
                <img className="svg" src="/img/instagram.svg" alt="instagram" />
              </button>
            </a>
            <a href="https://www.facebook.com/alex.an.3363">
              <button type="button" className="button footer-btn circle-btn middle-circle ">
                <img className="svg" src="/img/facebook.svg" alt="facebook" />
              </button>
            </a>
            <a href="https://500px.com/p/alantonoff">
              <button type="button" className="button footer-btn circle-btn last-circle ">
                <svg
                  className="svg"
                  id="logo_svg"
                  data-name="Logo SVG"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 80 20"
                >
                  <title>500px</title>
                  <path
                    d="M24.83,0a10,10,0,1,0,10,10h0A10.09,10.09,0,0,0,24.83,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.9,7.9,0,0,1,24.83,17.9ZM46.32,0a10,10,0,1,0,10,10h0A10,10,0,0,0,46.32,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.77,7.77,0,0,1,46.32,17.9ZM7.63,6a6.74,6.74,0,0,0-5.3,1.4V2.1h9c0.3,0,.5-0.1.5-1s-0.4-.9-0.6-0.9H1.33a0.9,0.9,0,0,0-.9.9V9.9c0,0.5.3,0.6,0.8,0.7a0.76,0.76,0,0,0,.9-0.2h0a5.69,5.69,0,0,1,5-2.4,5.2,5.2,0,0,1,4.5,4.4A5.06,5.06,0,0,1,7.23,18H6.63a5.1,5.1,0,0,1-4.7-3.3c-0.1-.3-0.3-0.5-1.1-0.2s-0.9.5-.8,0.8a7.09,7.09,0,0,0,9,4.2,7.09,7.09,0,0,0,4.2-9A7,7,0,0,0,7.63,6ZM63.12,0.1a5.42,5.42,0,0,0-4.8,5.4v8.9c0,0.5.4,0.6,1,.6s1-.1,1-0.6V5.5a3.36,3.36,0,0,1,2.9-3.4,3.29,3.29,0,0,1,2.5.8,3.19,3.19,0,0,1,1.1,2.4,4,4,0,0,1-.7,1.9,3.15,3.15,0,0,1-2.8,1.3h0c-0.4,0-.7,0-0.8.9,0,0.6,0,.9.5,1a4.92,4.92,0,0,0,2.9-.6,5.37,5.37,0,0,0,2.9-4.2A5.18,5.18,0,0,0,64,0,2.77,2.77,0,0,1,63.12.1Zm13.1,5.2,3.6-3.6c0.1-.1.4-0.4-0.2-1.1a1,1,0,0,0-.7-0.4h0a0.52,0.52,0,0,0-.4.2L74.92,4l-3.6-3.7c-0.3-.3-0.6-0.2-1.1.2s-0.5.8-.2,1.1l3.6,3.6L70,8.9h0a0.76,0.76,0,0,0-.2.4,0.84,0.84,0,0,0,.4.7,1.61,1.61,0,0,0,.7.4h0a1.06,1.06,0,0,0,.5-0.2L75,6.6l3.6,3.6a0.52,0.52,0,0,0,.4.2h0a1,1,0,0,0,.7-0.4c0.3-.4.4-0.8,0.1-1Z"
                    transform="translate(0)"
                    fill="#fff"
                  />
                </svg>
              </button>
            </a>
          </div>
          <p>© 2024 Alex`s Portfolio. All rights reserved.</p>
          <div className="footer-btn-div phone">
            <a href="https://www.instagram.com/ant.alex.photo/">
              <button type="button" className="button footer-btn circle-btn first-circle ">
                <img className="svg" src="/img/instagram.svg" alt="instagram" />
              </button>
            </a>
            <a href="https://www.facebook.com/alex.an.3363">
              <button type="button" className="button footer-btn circle-btn middle-circle ">
                <img className="svg" src="/img/facebook.svg" alt="facebook" />
              </button>
            </a>
            <a href="https://500px.com/p/alantonoff">
              <button type="button" className="button footer-btn circle-btn last-circle ">
                <svg
                  className="svg"
                  id="logo_svg"
                  data-name="Logo SVG"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 80 20"
                >
                  <title>500px</title>
                  <path
                    d="M24.83,0a10,10,0,1,0,10,10h0A10.09,10.09,0,0,0,24.83,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.9,7.9,0,0,1,24.83,17.9ZM46.32,0a10,10,0,1,0,10,10h0A10,10,0,0,0,46.32,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.77,7.77,0,0,1,46.32,17.9ZM7.63,6a6.74,6.74,0,0,0-5.3,1.4V2.1h9c0.3,0,.5-0.1.5-1s-0.4-.9-0.6-0.9H1.33a0.9,0.9,0,0,0-.9.9V9.9c0,0.5.3,0.6,0.8,0.7a0.76,0.76,0,0,0,.9-0.2h0a5.69,5.69,0,0,1,5-2.4,5.2,5.2,0,0,1,4.5,4.4A5.06,5.06,0,0,1,7.23,18H6.63a5.1,5.1,0,0,1-4.7-3.3c-0.1-.3-0.3-0.5-1.1-0.2s-0.9.5-.8,0.8a7.09,7.09,0,0,0,9,4.2,7.09,7.09,0,0,0,4.2-9A7,7,0,0,0,7.63,6ZM63.12,0.1a5.42,5.42,0,0,0-4.8,5.4v8.9c0,0.5.4,0.6,1,.6s1-.1,1-0.6V5.5a3.36,3.36,0,0,1,2.9-3.4,3.29,3.29,0,0,1,2.5.8,3.19,3.19,0,0,1,1.1,2.4,4,4,0,0,1-.7,1.9,3.15,3.15,0,0,1-2.8,1.3h0c-0.4,0-.7,0-0.8.9,0,0.6,0,.9.5,1a4.92,4.92,0,0,0,2.9-.6,5.37,5.37,0,0,0,2.9-4.2A5.18,5.18,0,0,0,64,0,2.77,2.77,0,0,1,63.12.1Zm13.1,5.2,3.6-3.6c0.1-.1.4-0.4-0.2-1.1a1,1,0,0,0-.7-0.4h0a0.52,0.52,0,0,0-.4.2L74.92,4l-3.6-3.7c-0.3-.3-0.6-0.2-1.1.2s-0.5.8-.2,1.1l3.6,3.6L70,8.9h0a0.76,0.76,0,0,0-.2.4,0.84,0.84,0,0,0,.4.7,1.61,1.61,0,0,0,.7.4h0a1.06,1.06,0,0,0,.5-0.2L75,6.6l3.6,3.6a0.52,0.52,0,0,0,.4.2h0a1,1,0,0,0,.7-0.4c0.3-.4.4-0.8,0.1-1Z"
                    transform="translate(0)"
                    fill="#fff"
                  />
                </svg>
              </button>
            </a>
          </div>
        </footer>
        <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js" />
        <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js" />
        <script type="text/javascript" src="/js/slick.min.js" />
        <script type="text/javascript" src="/js/slider.js" />
      </body>
    </html>
  );
};

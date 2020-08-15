import React from 'react';

function PageFooter() {
  return (
    <>
      <footer className="footer">
        <a href="mailto:lucasgabrielsa@hotmail.com" className="footer__link">hello@lucas.dev</a>
        <ul className="social-list">
          <li className="social-list__item">
            <a className="social-list__link" href="https://codepen.io">
              <i className="fab fa-codepen" />
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="http://dribbble.com">
              <i className="fab fa-dribbble" />
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="https://twitter.com/lucasgabrielsa">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="https://github.com/lucasgabrielsa">
              <i className="fab fa-github" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default PageFooter;

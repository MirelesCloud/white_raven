import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="White Raven"
            style={{ width: '8em', height: 'auto' }}
          />
        </div>
        <div className="content has-text-centered ">
          <div className="container ">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/whiteravencreation/">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com/officialwhiteravencreations">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="content has-text-centered">
        <hr/>
          <p className="is-size-7"><strong className="has-text-light">White Raven Creations &#169; 2019</strong> - Created by <a className="has-text-light" href="https://mirelescommuncations" aria-label="Mireles Communications" target="_blank" rel="noopener noreferrer">Mireles Communications</a> in the <a className="has-text-light" href="https://mirelescloud.com" aria-label="MirelesCloud" target="_blank" rel="noopener noreferrer">MirelesCloud.</a> All Rights Reserved</p>
          <br/>
        </div>
      </footer>
    )
  }
}

export default Footer

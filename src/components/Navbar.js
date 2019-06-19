import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";


const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };


  render() {
    return (
      <nav
        className="navbar is-transparent is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
        style={{
          borderBottom: `#cccccc solid .01rem`,
        }}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="White Raven" style={{ width: "120px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">
                  Art Gallery
                </div>
                <div className="navbar-dropdown">
                  <Link className="navbar-item is-size-6" to="/murals">
                    Murals
                  </Link>
                  <Link className="navbar-item is-size-6" to="/wood_art">
                    Wood Art
                  </Link>
                  <Link className="navbar-item is-size-6" to="/leis">
                    Leis
                  </Link>
                  <hr className="navbar-divider"/>
                  <Link className="navbar-item is-size-6" to="/commissions">
                    Commissions
                  </Link>
                </div>
              </div>
              <Link className="navbar-item" to="/store">
                Store
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;

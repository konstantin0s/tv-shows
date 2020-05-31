import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './css/header.css';

 class Header extends Component {
     
    render() {
        return (

            <React.Fragment>
            <header className="header" id="masthead">
                <nav className="links">
      <div className="loogo">
      <Link style={linkStyle} className="logoStyle" to="#">TV-Amaze</Link>
                <p>Binge Watching</p>
      </div>
                    <Link style={linkStyle} className="link" to="/">Shows</Link>
                    <Link style={linkStyle} className="link" to="/showlist">Tv-Shows</Link>
                    {/* <Link style={linkStyle} className="link" to="/collections">Collections</Link> */}
                </nav>

                </header>

                <header className="sub-header">
                <nav className="sub-nav">
          <div className="nav-container">
                   <Link style={linkStyle} className="sub-link" to="/people">People</Link>
    
                    <Link style={linkStyle} className="sub-link" to="/network">Network</Link>
                    <Link style={linkStyle} className="sub-link" to="/articles">Articles</Link>
                    <Link style={linkStyle} className="sub-link" to="/people">People</Link>
                    <Link style={linkStyle} className="sub-link" to="/channels">Web-Channels</Link>
          </div>
                </nav>
            </header>
        </React.Fragment>
        )
    }
}

const linkStyle = {
    textDecoration: "none",
    marginRight: "20px",
    marginLeft: "20px"
  };

  

export default Header;
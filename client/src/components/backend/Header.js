import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './css/header.css';

 class Header extends Component {
     
    render() {
        const randomId = Math.floor(Math.random() *  9 + 1 )
        return (

            <React.Fragment>
            <header className="header" id="masthead">
                <nav className="links">
      <div className="loogo">
      <Link style={linkStyle} className="logoStyle" to="#">TV-Amaze</Link>
                <p>Binge Watching</p>
      </div>
                    <Link style={linkStyle} className="link" to="/">Shows</Link>

                </nav>

                </header>

                <header className="sub-header">
                <nav className="sub-nav">
          <div className="nav-container">
                   <Link style={linkStyle} className="sub-link" to="/people">People</Link>
    
                    <Link style={linkStyle} className="sub-link" to="/network">Networks</Link>
                    <a style={linkStyle} className="sub-link" target="_blank" href="https://www.tvmaze.com/articles">Articles</a>
                    <Link style={linkStyle} className="sub-link" to={`/shows/${randomId}/crew`}>Crew</Link>
                    <a style={linkStyle} className="sub-link" target="_blank" href="https://www.tvmaze.com/webchannels">Web Channels</a>
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
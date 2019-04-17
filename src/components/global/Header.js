//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {

    console.log(this.props);
    const {title, items } = this.props;
    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} alt="logo" />
          <h2>{title}</h2>

          <ul className="Menu">
            {
              items && items.map( 
                (item, key)=> < li key={key}>{item.title} </li> 
                )
            }

            {/* {
              items && items.map(
                (item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>
              )
            } */}


          </ul>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Header;

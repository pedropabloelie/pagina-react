
//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import './css/Footer.css';

class Footer extends Component {

       static propTypes = {
              copyright: PropTypes.string
       };
       
  render() {

       const { copyright = '&copy; React 2019'} = this.props;
    return (
      <div className="Footer">
       <h2>{copyright}</h2>
       </div>
    );
  }
}

export default Footer;

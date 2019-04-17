//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//components
import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';

//Data
import items from '../data/menu';

class App extends Component {
  

  render() {
    

    return (
      <div className="App">
        <Header 
          title="Codejobs"
          items={items}
        />
        <Content/>
        <Footer copyright="&copy; Codeando 2019"/>
      </div>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx'
import Content from './content.jsx'
 
class World extends React.Component {
  render() {
    return <Header />
  }
}
 
ReactDOM.render(<World/>, document.getElementById('world'));
ReactDOM.render(<Content/>, document.getElementById('world'));
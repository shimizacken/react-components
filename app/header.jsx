import React from 'react';

class Header extends React.Component {
    render(){

        var headerStyle = {
            fontSize: 100,
            color: '#FF0000'
        };

        const x = 20;

        return <h1 data-name="header1" style={headerStyle}>{this.props.headerProp}</h1>
    }
}

export default Header;
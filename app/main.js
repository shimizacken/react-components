import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

$(document).ready(function () {
    ReactDOM.render(<App />, document.getElementById('app'));
});
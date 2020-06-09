import React, { Component, Fragment } from 'react';


//Resources
import '../../scss/content.scss';

//Components
import {Calendar} from '../layouts/calendar.js';

export class App extends Component {
  render() {
    return (        
        <Calendar />
    );
  }
};
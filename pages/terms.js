import React, { Component } from 'react';

export default class extends Component {
  static title = 'Terms of Use';

  render() {
    const md = require('./terms.md');
    return (
      <div className='ui container main-content'>
        <h1>Terms of Service</h1>
        <div dangerouslySetInnerHTML={ { __html: md } } />
      </div>
    );
  }

}

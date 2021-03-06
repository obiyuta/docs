import React, { PropTypes, Component } from 'react';
import ManualMenu from './manual-menu';
import HelpUs from './helpus';
import Link from './Link';

export default class extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    currentPageTitle: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className='ui container main-content'>
        <div className='ui stackable grid'>
          <div className='four wide column'>
            <ManualMenu />
          </div>
          <div className='twelve wide column doc-content'>
            <div className='ui breadcrumb'>
              <Link to='/' className='section'>Docs</Link>
              <i className='right chevron icon divider'></i>
              <Link to='/manual/' className='section'>Inkdrop Manual</Link>
              <i className='right chevron icon divider'></i>
              <div className='active section'>{ this.props.currentPageTitle }</div>
            </div>
            <div className='ui divider'></div>

            { this.props.children }

            <HelpUs />
          </div>
        </div>
      </div>
    );
  }

}


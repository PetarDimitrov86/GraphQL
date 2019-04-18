import React, { Component } from 'react';

class LyricList extends Component {
  renderLyrics() {
    return this.props.lyrics.map(({ content, id }) => {
      return (
        <li key={id} className='collection-item'>
          {content}
        </li>
      )
    });
  }

  render() {
    if (!this.props.lyrics) { return null; }

    return (
      <ul className='collection'>
        {this.renderLyrics()}
      </ul>
    );
  }
}

export default LyricList;

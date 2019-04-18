import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricList extends Component {
  onLike(id, likes) {
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1
        }
      }
    });
  }

  renderLyrics() {
    return this.props.lyrics.map(({ content, id, likes }) => {
      return (
        <li key={id} className='collection-item'>
          {content}
          <div>
            <i className='material-icons' onClick={() => this.onLike(id, likes)}>thumb_up</i>
            {likes}
          </div>
        </li>
      );
    });
  }

  render() {
    if (!this.props.lyrics) {
      return null;
    }

    return <ul className='collection'>{this.renderLyrics()}</ul>;
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(mutation)(LyricList);
import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router';
import gql from 'graphql-tag';
import fetchSongsQuery from '../queries/fetchSongs';

class SongList extends Component {
  onSongDelete(id) {
    this.props
      .mutate({ variables: { id } })
      .then(() => this.props.data.refetch());
  }

  renderSongs() {
    if (this.props.data.loading) {
      return <span>Loading...</span>;
    }

    return this.props.data.songs.map(({ id, title }) => {
      return (
        <li key={id} className='collection-item'>
          {title}
          <i
            className='material-icons'
            onClick={() => {
              this.onSongDelete(id);
            }}
          >
            delete
          </i>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul className='collection'>{this.renderSongs()}</ul>
        <Link to='/songs/new' className='btn-floating btn-large red right'>
          <i className='material-icons'>add</i>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(fetchSongsQuery)(SongList));

// alternative for exporting multiple queries
// export default compose(
//   graphql(mutation),
//   graphql(fetchSongsQuery)
// )(SongList);

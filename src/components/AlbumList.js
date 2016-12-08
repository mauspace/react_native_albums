import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
     .then(response => this.setState({ albums: response.data }));
  }
renderAlbums() {
  return this.state.albums.map(album =>
    <AlbumDetail Key={album.title} album={album} />
  );
}
render() {
console.log(this.state);

 return (
   <ScrollView Style={{ flex: 1 }}>
      {this.renderAlbums()}
   </ScrollView>
  );
 }
}
export default AlbumList;

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
// import axios from 'axios';
import AlbumDetail from './AlbumDetail';
class ProductList extends Component {
    state = { albums: [] };
    componentWillMount() {
        console.log('componentWillMount in ProductList');
        // debuuger;
        // axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => console.log(response));
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                this.setState({ albums: responseData });
            });
    }
    renderAlbums() {
        return this.state.albums.map(
            // album => <Text key={album.title} style={{ backgroundColor: 'white' }}>{album.title}</Text>
            album => <AlbumDetail key={album.title} album={album} />
        );
    }
    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {/* <Text style={{ backgroundColor: 'white' }}>List of Albums</Text> */}
                {this.renderAlbums()}
            </ScrollView >
        );
    }
}
export default ProductList;
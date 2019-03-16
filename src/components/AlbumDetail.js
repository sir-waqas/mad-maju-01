import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import CustomButton from './CustomButton';
const AlbumDetail = (props) => {
    // const AlbumDetail = (album) => {
    // const { title, artist, thumbnail_image, image } = album; //Destructuring the props item album
    console.log(props.album.thumbnail_image);
    return (
        // <View>
        //     <Text style={{ backgroundColor: 'white' }}>{props.album.title}</Text>
        // </View>
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{ uri: 'http://mabsapps.com/wp-content/uploads/2018/11/cropped-mabsapps-logo-black-3.png' }} />
                    {/* <Image style={styles.thumbnailStyle} source={{ uri: album.thumbnail_image }} /> */}
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={styles.imageStyle} source={{ uri: props.album.image }} />
            </CardSection>
            <CardSection>
                {/* <CustomButton onPress={() => console.log(props.album.title)} /> */}
                <CustomButton onPress={() => Linking.openURL(props.album.url)} >
                    BuyNow !!!
                </CustomButton>
            </CardSection>
        </Card>
    );
};
const styles = {
    headerContentStyle: {
        color: 'black',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18,
        color: 'black'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};
export default AlbumDetail; 
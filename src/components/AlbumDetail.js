import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
 const { title, artist, thumbnail_image, image } = album;
 const {
   thumbnailStyle,
   headerContenStyle,
   thumbnailContentStyle,
   headerTextStyle,
   imagesStyle } = styles;
 return (
 <Card>
  <CardSection>
  <View style={thumbnailContentStyle}>
    <Image
     style={thumbnailStyle}
     source={{ uri: thumbnail_image }}
    />
  </View>
  <View style={headerContenStyle}>
    <Text style={headerTextStyle}> {title}</Text>
    <Text> {artist}</Text>
  </View>
   </CardSection>

   <CardSection>
   <Image
   style={imagesStyle}
   source={{ uri: image }}
   />
   </CardSection>

  <CardSection>
     <Button />
  </CardSection>
 </Card>
 );
};

const styles = {
 headerContenStyle: {
  flexDirection: 'column',
  justifyContent: 'space-around'
},
headerTextStyle: {
  fontSize: 18,

},
thumbnailStyle: {
  height: 50,
  width: 50
},
thumbnailContentStyle: {
 justifyContent: 'center',
 alignItems: 'center',
 marginLeft: 10,
 marginRight: 10
},
imagesStyle: {
 height: 300,
 flex: 1,
 width: null

}
};

export default AlbumDetail;

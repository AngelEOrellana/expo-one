import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

//const PlaceHolderImage = require ('./assets/images/HP-Victus.jpg')
const PlaceHolderImage1 = require ('./assets/images/ramon01.png')

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.text}>!!Ya vienen los Bertenos.....!!</Text>
        <br></br>
        <ImageViewer placeholderImageSource={PlaceHolderImage1}></ImageViewer>
        {/* <Image source={PlaceHolderImage} style={styles.image}></Image> */}        
      </View>

      <View style={styles.footerContainer}>
        <Button label="Choose a photo"/>
        <Button label="Use this photo"/>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',    
  },
  text:{
    fontSize:20,
    color:'white',
  },
  imageContainer:{
   flex:1,
   paddingTop: 58,
  },

  image:{
    width:320,
    height:440,
    borderRadius:5,
  },
  footerContainer:{
    color:'white',
    borderRadius:5,
    backgroundColor:'white',
    width:120,
    padding:5,
    marginBottom:20,
  }
});
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ButtonComponent from './components/ButtonComponent';
import ImageViewer from './components/ImageViewer';

const PlaceHolderImage1 = require ('./assets/images/ramon01.png')

const App = () => {
  const handlePress = () => {
    //console.log('Botón presionado');      
    alert('Botón nuevo presionado....');
};

  return (
    
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.text}>!!Ya vienen los Bertenos.....!!</Text>
        <br></br>
        <ImageViewer placeholderImageSource={PlaceHolderImage1}></ImageViewer>
        {/* <Image source={PlaceHolderImage} style={styles.image}></Image> */}        
      </View>

      <View style={styles.boton1}>
        <Text style={styles.text}>Probando el refactoring....!!</Text>
        <ButtonComponent onPress={handlePress} title="Presionar" />
      </View>
    </View>
   
  );
};


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
  },

  boton1:{ 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  }

});

export default App;
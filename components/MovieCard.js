import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Item = ({details, updateState, dispFavBtn}) => (
  <View style={styleSheet.mainContainer}>
    { dispFavBtn == "N/A"? 
     <Icon name="movie-open" size={20} color="red"/> :  <Image
      source={{uri: details.Poster}}
      resizeMode="center"
      style={styleSheet.imageFlexSize}
    /> }
    <Text style={styleSheet.titleText}>{details.Title}</Text>
    <Text>{details.Year}</Text>
    {dispFavBtn ? (
      <TouchableOpacity
        style={styleSheet.favBtnStyle}
        onPress={() => updateState(details)}>
        <Text style={styleSheet.favBtnTxt}>Add to Favourites</Text>
      </TouchableOpacity>
    ) : null}
  </View>
);

const styleSheet = StyleSheet.create({
  mainContainer: {
    elevation: 1,
    height: 200,
    width: 200,
    flex: 1,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    backgroundColor: '#ecf0f1',
  },
  imageFlexSize: {
    flex: 2,
  },
  titleText: {
    fontWeight: 'bold',
  },
  favBtnStyle: {
    backgroundColor: 'blue',
    marginVertical: 2,
    padding: 10,
    alignItems: 'center',
  },
  favBtnTxt: {
    color: 'white',
  },
});
export default Item;

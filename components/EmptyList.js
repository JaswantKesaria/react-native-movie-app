import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const EmptyList = ({msgString}) => (
  <View style={styleSheet.mainContainer}>
      <Text style={styleSheet.infoText}>{msgString} </Text>
  </View>
);

const styleSheet = StyleSheet.create({
  mainContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
    
  },
  infoText: {
    marginHorizontal: 20,
    marginVertical: 100,
    fontSize: 16,
    fontWeight:'bold'
  },
 
});
export default EmptyList;

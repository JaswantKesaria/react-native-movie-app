import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



class BottomNavigation extends React.Component {
  constructor(props){
    super(props);
  }
  toggleNavigation() {
    this.props.navigationProps();
  }
  render (){
   if(this.props.selectedTab){
    return (
        <View style={{flex:1, flexDirection: 'row', justifyContent:'space-evenly', alignItems:'center', borderTopColor:'black', borderTopWidth:1 }}>
        <Text style={{color: 'blue'}}>Search</Text>
        <TouchableOpacity onPress={this.toggleNavigation.bind(this)}>
          <Text>My List</Text>
          </TouchableOpacity>
        </View>
       )
   } else {
       return(
        <View style={{flex:1, flexDirection: 'row', justifyContent:'space-evenly', alignItems:'center',borderTopColor:'black', borderTopWidth:1 }}>
             <TouchableOpacity onPress={this.toggleNavigation.bind(this)}>
           <Text >Search</Text>
           </TouchableOpacity>
           <Text style={{color: 'blue'}}>My List</Text>
         </View>
       )
   }
}
   
  
};
export default BottomNavigation;

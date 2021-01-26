import React from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Text
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import BottomNavigation from '../components/Navigation'
import Item from '../components/MovieCard'
import {connect} from 'react-redux';
import {
  addListItem
} from '../actions/ListActions'
import{
  searchChanged,
  searchEnded
} from '../actions/HomeActions'
import EmptyList from '../components/EmptyList';
import axios from 'axios'
import Toast from 'react-native-simple-toast';



const CancelToken = axios.CancelToken;

let cancel;

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      results: null
    }
  }
  sendAddListItems(item){
    this.props.addListItem(item);
  }
  componentDidMount() {
    this.props.searchChanged("");
  }
  onChangeSearch(txt) {
    this.props.searchChanged(txt);
    if(txt.length>2){
    if (cancel !== undefined) {
      cancel();
    }
    axios.get("http://www.omdbapi.com/?type=movie&apikey=a1b5f9ec&s=" + txt,  {
        cancelToken: new CancelToken(function executor(c) {
          cancel = c;
        }),
      })
      .then((res) => {
      this.setState({
        results:res.data.Search
      });
      this.props.searchEnded();
    }).catch((err) => {
      console.log(err);
      this.props.searchEnded();
    })
  }
    
    
    
  }
  render (){
   return (
    <View style={{flex:1}}>
        <View style={{flex:0.1}}>
        <Searchbar
      placeholder="Search"
      onChangeText={this.onChangeSearch.bind(this)}
      value={this.props.searchText}
      
    />
        </View>
        <View style={{flex:0.8}}>
       
        { this.props.loading && this.props.searchText.length > 2 ? 
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Please wait while searching for Results</Text>
        </View> :
        <FlatList
        data={this.state.results}
        renderItem={({item}) => <Item details={item} updateState={this.sendAddListItems.bind(this)} dispFavBtn={true}/>}
        keyExtractor={item => item.imdbID}
        numColumns="2"
        ListEmptyComponent={
                  <EmptyList msgString="Please start searching :), Enter more than 2 characters"/>
                }
      />}
        </View>
        <View style={{flex:0.1}}>
        <BottomNavigation navigationProps={() => this.props.navigation.navigate('mylist')} selectedTab={true}/>
        </View>
    
    </View>
   )
  }
   
  
};

const mapStateToProps = state => ({
  selectedItems: state.selectedListState.selectedItems,
  searchText: state.homeState.searchText,
  loading: state.homeState.loading
});

const mapDispatchToProps = {
  addListItem,
  searchChanged,
  searchEnded
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

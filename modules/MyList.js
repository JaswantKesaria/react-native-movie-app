import React from 'react';
import {View, FlatList, Text} from 'react-native';
import BottomNavigation from '../components/Navigation';
import Item from '../components/MovieCard';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {clearListItem} from '../actions/ListActions';
import EmptyList from '../components/EmptyList';

class MyList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={this.props.clearListItem}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            padding: 15,
            backgroundColor: 'blue',
            marginHorizontal: 10,
            marginVertical: 5,
            borderRadius: 15,
          }}>
          <Text style={{color: 'white', fontSize: 20}}>Clear</Text>
        </TouchableOpacity>

        <View style={{flex: 0.9}}>
          <FlatList
            data={this.props.selectedItems}
            renderItem={({item}) => <Item details={item} dispFavBtn={false} />}
            keyExtractor={(item) => item.imdbID}
            numColumns="2"
            ListEmptyComponent={
                  <EmptyList msgString="No items to display :(. Please navigate to the main screen to select Items."/>
                }
          />
        </View>
        <View style={{flex: 0.1}}>
          <BottomNavigation
            navigationProps={() => this.props.navigation.navigate('home')}
            selectedTab={false}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedItems: state.selectedListState.selectedItems,
});

const mapDispatchToProps = {
  clearListItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyList);

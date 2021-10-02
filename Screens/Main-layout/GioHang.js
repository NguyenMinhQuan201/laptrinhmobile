import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

const data = require('./GioHang.json');
export default class GioHang extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.backHome = this.backHome.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.state = {
      data: data.carts,
      id: 0,
      cong:0,
      tru:0,
      dem:0,
    };
  }

  computetru(){
    for (let i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].id === this.state.id) {
        const dem = this.state.dem - 1;
        this.setState({dem:dem});
        console.log(dem);
      }
    }
  }
  computecong(){
    for (let i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].id === this.state.id) {
        const dem = this.state.dem + 1;
        this.setState({dem:dem})
        console.log(dem);
      }
    }
  }
  backHome() {
    this.navigation.goBack();
  }
  renderItem({item, index}) {
    return (
      <View style={styles.cart}>
        <View style={styles.img}>
          <Image
            style={{width: 115, height: 115, borderRadius: 20}}
            source={{uri: item.image}}
          />
        </View>

        <View style={styles.title}>
          <Text style={{marginLeft: 10, fontSize: 16}}>{item.name}</Text>
          <Text style={{marginLeft: 10}}>{item.category}</Text>

          <View style={styles.quantity}>
            <Text style={styles.textQuantity} onPress={this.computetru.bind(this)}>-</Text>
            <Text style={styles.textQuantity}>{this.state.dem}</Text>
            <Text style={styles.textQuantity} onPress={this.computecong.bind(this)}>+</Text>
          </View>
        </View>
        <View style={styles.price}>
          <Text style={{fontSize: 16, color: 'red', textAlign: 'center'}}>
            Price
          </Text>
          <Text>${item.price}</Text>
          <Image
            //style={styles.imgDetele}
            style={{width: 30, height: 30}}
            source={require('../../Image/delete.png')}
          />
        </View>

      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={{fontSize: 16}} onPress={this.backHome}>
              Back
            </Text>
          </View>
          <View style={styles.headerCenter}>
            <Text style={{fontSize: 26}}>Your Cart</Text>
          </View>
          <View style={styles.headerRight}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../../Image/search_new.png')}
            />
          </View>
        </View>
      
        <FlatList
          //style={styles.listNotify}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
        

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'pink'
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'pink',
    height: 80,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    //justifyContent: 'center'
  },
  headerLeft: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    //backgroundColor:'darkblue',
    borderBottomLeftRadius: 20
  },
  headerCenter: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink'
  },

  cart: {
    marginTop: 30,
    flexDirection: 'row',
    padding: 2,
    borderWidth: 1,
    borderColor: 'red',
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "#CC00FF",
  },
  img: {
    flex: 2.5, 
    width: 124,
    height: 115,
    borderRadius: 20,
    backgroundColor: 'grey',
    marginLeft: 5,
  },
  title: {
    flex: 5,
    backgroundColor: 'yellow',
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'space-between'
  },
  quantity:{
    flexDirection: 'row',
    backgroundColor: 'pink',
    width: 120,
    height: 30,
    alignItems: 'center',
    marginLeft: 20,
  },
  textQuantity: {
    fontSize: 18,
    width: 40,
    //height: 30,
    textAlign: 'center',
  },
  price: {
    flex: 1,
    marginRight: 5,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  // imgDetele: {
    
  // },
});

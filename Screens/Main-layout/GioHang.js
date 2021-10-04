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

var data = require('./GioHang.json');
export default class GioHang extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.backHome = this.backHome.bind(this);
    this.computetru=this.computetru.bind(this)
    this.computecong=this.computecong.bind(this)
    this.deletecart=this.deletecart.bind(this);
    this.sum = this.sum.bind(this);
    this.state = {
      data: props.route.params,
      id: 1,
      cong:0,
      tru:0,
      dem:0,
      tong: 0,
      label:''
    };
  }
  deletecart(name){
    for(let i=0;i<data.carts.length;i++){
        if(data.carts[i].name == name){
          data.carts.pop(data.carts[i]);
          console.log('xoa thang cong')
      }
    }
    this.navigation.navigate('GioHang')
    this.navigation.navigate('GioHang',data.carts)
  }
  sum(){
    let tong = 0;
    for (let i = 0; i < data.carts.length; i++) {
        tong = tong + data.carts[i].tonggia
        this.setState({tong:tong});
        console.log(tong);
    }
  }
  computetru(name){
    var giagoc=0;
    for (let i = 0; i < data.carts.length; i++) {
      giagoc=data.carts[i].price;
      if (data.carts[i].name === name) {
        if(data.carts[i].Quantity==1){
          console.log('gioi han');
        }else{
          data.carts[i].Quantity=data.carts[i].Quantity-1;
          data.carts[i].tonggia=data.carts[i].Quantity*giagoc;
          console.log(data.carts[i].Quantity);
        }
      }
    }
    this.sum();
    this.navigation.navigate('GioHang')
    this.navigation.navigate('GioHang',data.carts)
  }
  computecong(name){
    var giagoc=0;
    for (let i = 0; i < data.carts.length; i++) {
      giagoc=data.carts[i].price;
      if (data.carts[i].name === name) {
        data.carts[i].Quantity=data.carts[i].Quantity+1;
        data.carts[i].tonggia=data.carts[i].Quantity*giagoc;
        console.log(data.carts[i].Quantity);
      }
    }
    this.sum();
    this.navigation.navigate('GioHang')
    this.navigation.navigate('GioHang',data.carts)
  }
  compute(){

  }
  backHome() {
    this.navigation.goBack();
  }
  render() {
    const RenderItem=({cart})=> {
      console.log(cart)
      return (
        <View style={styles.cart}>
          <View style={styles.img}>
            <Image
              style={{width: 115, height: 115, borderRadius: 20}}
              source={{uri: cart.img}}
            />
          </View>
  
          <View style={styles.title}>
            <Text style={{marginLeft: 10, fontSize: 16}}>{cart.name}</Text>
            <Text style={{marginLeft: 10}}></Text>
  
            <View style={styles.quantity}>
              <Text style={styles.textQuantity} onPress={()=> this.computetru(cart.name)}>-</Text>
              <Text style={styles.textQuantity}>{cart.Quantity}</Text>
              <Text style={styles.textQuantity} onPress={()=> this.computecong(cart.name)}>+</Text>
            </View>
          </View>
          <View style={styles.price}>
            <Text style={{fontSize: 16, color: 'red', textAlign: 'center'}}>
              Price
            </Text>
            <Text>${cart.tonggia}</Text>
            <TouchableOpacity onPress={()=>this.deletecart(cart.name)} >
              <Image
                //style={styles.imgDetele}
                style={{width: 30, height: 30}}
                source={require('../../Image/delete.png')}
              />
            </TouchableOpacity>
          </View>
  
        </View>
      );
    }
    for(let i=0;i<data.carts.length-1;i++){
      for(let j=i+1;j<data.carts.length;j++){
        if(data.carts[i].name == data.carts[j].name){
          data.carts.pop(data.carts[j]);
          console.log('thang cong')
        }
      }
    }
    
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
      <View>
        <Text>
           {this.state.label}
        </Text>
        
        
      </View>
        <View style={styles.products}>
          <FlatList
            //style={styles.listNotify}
            data={data.carts}
            renderItem={({item}) => <RenderItem cart={item} />}
          />
          <Text onPress={()=>this.sum()} style={{fontSize: 20, marginTop:25,color:'white'}}>Totals</Text>
        <View style={styles.bottom}>
        
            <View style={styles.leftBottom}>
              <Text style={{fontSize: 14}}>Sub total:</Text>
              <Text style={{fontSize: 14}}>Shipping:</Text>
            </View> 
            <View style={styles.rightBottom}>
              <Text style={{fontSize: 14, paddingLeft: 60}}>{this.state.tong}</Text>
              <Text style={{fontSize: 14, paddingLeft: 60}}>$0.00</Text>
              <TouchableOpacity style={styles.button} onPress={this.sum}>
                <Text>Check Out</Text>
              </TouchableOpacity>
            </View>
        </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple'
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
  products: {
    height:500,
  },
  bottom: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    height:100,
  },
  leftBottom: {
    flex: 1,
    backgroundColor: 'pink',
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10
  },
  rightBottom: {
    flex: 1,
    backgroundColor: 'gray',
    borderBottomRightRadius:10,
    borderTopRightRadius:10
  },
});

import React,{Component} from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet,FlatList,Dimensions,TouchableOpacity,ScrollView} from 'react-native';
const width =Dimensions.get("screen").width/2-30;
export default class DetailsScreen extends Component {
    constructor (props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            data: props.route.params,
            cong:0,
            tru:0,
            dem:0,
        }
    }
    computetru(){
        const dem=this.state.dem-1
        this.setState({dem:dem});
        console.log(dem);
    }
    computecong(){
        const dem=this.state.dem+1
        this.setState({dem:dem})
        console.log(dem);
    }
  render(){
          return(
              <ScrollView>
                  <SafeAreaView style={{flex:1,backgroundColor:'purple'}}>
                  <View style={styles.Header}>
                      <View style={styles.goback} >
                           <Text style={styles.textback} onPress={()=>this.navigation.navigate('Home')}>
                               Back
                           </Text>
                      </View>
                      <View style={{backgroundColor:'grey'}} >
                              <Image                       
                                  source={require('../Home/ThongBao_2.png')}
                                  style={{
                                      width:50,
                                      height:50,
                                      marginLeft:30,
                                  }}
                              />      
                          </View>
                  </View>
                  <View style={styles.imageContainer}>
                      {/* <Image source={this.state.data.img} */}
                      <Image source={{uri:this.state.data.img}}
                          style={{resizeMode:'contain',flex:1,height:400,width:400,}}
                      />
                  </View>
                  
                  <View style={styles.detailContainer}>
                      <View style={{marginLeft:20,flexDirection:'row',alignItems:'flex-end'}}>
                          <View style={styles.line} />
                          <Text style={{fontSize: 18, fontWeight: 'bold',color:'white'}}>Best choice</Text>
                      </View>
                      <View
                      style={{
                          marginLeft: 20,
                          marginTop: 20,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                      }}>
                      <Text style={{fontSize: 22, fontWeight: 'bold',color:'white'}}>
                          {this.state.data.name}
                      </Text>
                      <View style={styles.price}>
                          <Text style={{marginLeft:20,
                                  color:'white',
                                  fontWeight: 'bold',
                                  fontSize: 16,}}>
                              ${this.state.data.price}
                          </Text>
                      </View>
                  </View>
                  <View style={{paddingHorizontal:20,marginTop:10}}>
                       <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>
                             About
                      </Text>
                       <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>
                           {this.state.data.about}
                      </Text>
                  </View>
                  <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                      <View style={{flexDirection:'row',alignItems:'center'}}>
                          <View style={styles.borderBtn}>
                              <Text style={styles.borderBtnText}onPress={this.computetru.bind(this)} >
                                  -
                              </Text>
                          </View>
                              <Text
                                  style={{
                                  fontSize: 20,
                                  marginHorizontal: 10,
                                  fontWeight: 'bold',
                                  alignItems:'center'
                                  }}>
                              {this.state.dem}
                              </Text>
                              <View style={styles.borderBtn}>
                                  <Text style={styles.borderBtnText} onPress={this.computecong.bind(this)}>+</Text>
                              </View>
                          </View>
                          <View style={styles.buyBtn}>
                          <Text
                              style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                              Buy
                          </Text>
                      </View>
                      </View>
                  </View>
                  <Text>
                      DAY LA LIST KHAC
                  </Text>
                  
              </SafeAreaView>
          </ScrollView>
          )
     }
}

const styles = StyleSheet.create({
    buyBtn: {
        width: 130,
        height: 50,
        backgroundColor:'pink',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
      },
    borderBtn: {
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 40,
        marginLeft:10
      },
      borderBtnText: {
          fontWeight: 'bold', 
          fontSize: 28},
    price:{
        width: 80,
        height: 40,
        justifyContent: 'center',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        backgroundColor:'pink'
    },
    line:{
        width:25,
        height:2,
        backgroundColor:'white',
        marginBottom: 5,
        marginRight: 3,
    },
    Card:{
        backgroundColor:'white',
        height:225,
        width,
        marginHorizontal:2,
        borderRadius:10,
        marginBottom:20,
        marginLeft:10,
        marginRight:10,
    },
    detailContainer:{
        flex:0.55,
        backgroundColor:'grey',
        marginHorizontal:7,
        marginBottom:7,
        borderRadius:20,
        marginTop:30,
        paddingTop:30,
        height:500,
    },
    imageContainer:{
        flex:0.45,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
    },  
    textback:{
        marginTop:10,
        fontSize:20,
        fontWeight:'bold',
    },
    goback:{
        width:50,
        height:50,
        borderRadius:5,
        fontSize:20,
        fontWeight:'bold',
        backgroundColor:'grey',
        alignItems:'center',
    },
    Header:{
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'grey'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30
    },
    button: {
        borderWidth: 1,
        padding: 10,
        width: 150,
        alignItems: 'center'
    },
    buttonText: {
        // textAlign: 'center'
    }
});
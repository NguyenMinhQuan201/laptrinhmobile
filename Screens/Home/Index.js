import React, {Component} from 'react';
import {View, Text,Image, TouchableOpacity, StyleSheet, FlatList, Dimensions,TextInput} from 'react-native';
const width =Dimensions.get("screen").width/2-30;
import products from '../Products/products';
import products2 from '../Products/products2';
const productsjson1=require("../Products/products.json")
const productsjson2=require("../Products/products2.json")
const productsjson3=require("../Products/products3.json")
const productsjson4=require("../Products/products4.json")
export default class HomeScreen extends Component {
    constructor (props) {
        super(props);
        this.navigation = props.navigation;
            this.gotoDetail = this.gotoDetail.bind(this);
            this.gotoNotify = this.gotoNotify.bind(this);   
            this.refreshFlatList=this.refreshFlatList.bind(this)  ;
                this.state = {
                    data: products}                      
            
    }
    gotoDetail(product) {
        console.log(product.img);
        this.navigation.navigate('Detail', product);
    }
    gotoNotify() {
        this.navigation.navigate('Notify');
    }
    findout(item){
        console.log(item);
    }
    refreshFlatList(products){
        console.log(products)
        this.setState(this.state.data=products)
    }
    render() {
        // cái thanh swip 
        //List Hang Hoa
        const Card=({product})=>{
            return(
                <TouchableOpacity onPress={() => this.gotoDetail(product)}>
                <View style={styles.Card}>
                    <View>                       
                        <View style={{height:120,marginTop:30,alignItems:'center',justifyContent:'center',}}>
                            <Image 
                                style={{flex:1,resizeMode:'contain'}} 
                                source={ product.img}
                            ></Image>                            
                        </View>
                        <Text style={{fontSize:20,textAlign:'center',justifyContent:'center',fontWeight:'bold'}}>
                            {product.name}
                        </Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                            <Text style={{fontSize:15,textAlign:'left',fontWeight:'bold',marginLeft:5}}>
                                {product.price}
                            </Text>
                            <View style={{
                                height:25,
                                width:25,
                                backgroundColor:'purple',
                                borderRadius:5,
                                justifyContent:'center',
                                alignItems:'center',
                                marginRight:10,
                                
                            }}>
                                <Text style={{
                                    fontSize:18,
                                    color:'white',
                                    fontWeight:'bold',
                                    flex:1}}>
                                    +
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            );
        };
        return(           
            <View style={{backgroundColor:'purple',height:600}}>
                <View style={styles.header}>
                        <View style={{
                                    backgroundColor:'grey',
                                    width:300,
                                    }}>
                            <Text style={{paddingLeft:30,fontSize:20,fontWeight:'bold',color:'pink'}}>
                                    Welcome to 
                                
                            </Text>   
                            <Text style={{paddingLeft:20,fontSize:25,fontWeight:'bold',color:'pink'}}>
                                    
                                LipStickShop.com
                            </Text>        
                            
                            <View style={{flexDirection:'row'}}>
                                <View style={styles.seachContainer}>
                                    <Image                       
                                        source={require('../Home/seach.png')}
                                        style={{
                                            width:25,
                                            height:20,
                                            marginLeft:20,
                                        }}
                                    />   
                                    <TextInput placeholder="seach" style={styles.inputseach}></TextInput>  
                                </View>  
                            </View>
                        </View>

                        <View style={{backgroundColor:'grey'}} >
                            <Text style={{
                                        width:50,
                                        height:80,
                                        marginLeft:30,
                                    }}onPress={()=>this.gotoNotify()}>
                                <Image                       
                                    source={require('../Home/ThongBao_2.png')}
                                    style={{
                                        width:50,
                                        height:50,
                                        marginLeft:30,
                                    }}
                                />      
                            </Text>
                            
                        </View>
                        
                </View>
                
                <View style={styles.swip}>
                        <Text style={styles.swiptext}
                        onPress={()=>this.refreshFlatList(products)}
                        >
                                product1
                        </Text>
                        <Text style={styles.swiptext} 
                        onPress={()=>this.refreshFlatList(products2)}>
                                product2
                        </Text>
                        <Text style={styles.swiptext} 
                        >
                                product3
                        </Text>
                        <Text style={styles.swiptext} >
                                product4
                        </Text>
                </View>
                
                <FlatList 
                        numColumns={2} 
                        data={this.state.data} 
                        renderItem={({item})=><Card product={item}/>}
                        columnWrapperStyle={{justifyContent:'space-between'}}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                        marginTop:10,
                        paddingBottom:40,                        
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    swiptext:{
        margin:15,
        color:'white',
    },
    swip:{
        justifyContent:'center',
        backgroundColor:'pink',
        margin:10,
        flexDirection:'row',
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
    CategorySelected:{
        color:'pink',
        paddingBottom:5,
        borderBottomWidth:2,
        borderColor:'pink',
    },
    categoryText:{
        fontSize:16,
        color:'white',
        fontWeight:'bold',
    },
    categoryContainer:{
        backgroundColor:'purple',
        flexDirection:'row',
        marginTop:30,
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        justifyContent:'space-between',
        color:'white'
    },
    seachContainer:{
        height:40,       
        borderRadius:10,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        marginLeft:10,
    },
    inputseach:{
        fontSize:15,
        fontWeight:'bold',
        color:'green',
        backgroundColor:'white',
        borderRadius:15,
        width:230,      
    },
    seach:{
        justifyContent:'space-between',
    },
    header:{
        
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'grey',
        height:110,
    },
    container: {
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
        alignItems: 'center',
        marginBottom: 10
    },
    buttonText: {
        // textAlign: 'center'
    }
});
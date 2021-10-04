import React, {Component} from 'react';
const width =Dimensions.get("screen").width/2-30;
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
export default class DangKy extends Component {
    constructor (props) {
            super(props);
            this.navigation = props.navigation;
            this.state = {
                data: [
                ]
            }
    }
    render() {
        return(
            <View style={{backgroundColor:'pink'}}>
                <View style={styles.header}>
                    <Text style={{textAlign:'center',fontSize:40,fontWeight:'bold'}}>
                        WelCome to LipStick.com
                    </Text>
                </View>
                <View style={styles.container}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>
                        User
                    </Text>
                    <TextInput style={styles.input}></TextInput>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>
                        PassWord
                    </Text>
                    <TextInput secureTextEntry={true} style={styles.input} ></TextInput>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>
                        Email
                    </Text>
                    <TextInput secureTextEntry={true} style={styles.input} ></TextInput>
                        <View style={{alignItems:'center'}}>
                            <Text style={styles.buttonstyle}>
                                Register
                            </Text>
                            <Text style={styles.buttonstyle} onPress={()=>this.navigation.navigate('DangNhap')}>
                                Back
                            </Text>
                        </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header:{
        height:100,
        backgroundColor:'pink',
        
    },
    buttonstyle:{
        textAlign:'center',
        margin:15,
        height:30,
        borderRadius:10,
        backgroundColor:'pink',
        width:100,
        alignItems:'center',
        padding:5
    },
    container: {
      justifyContent: 'center',
      flexDirection:'column',
      padding:20,
      borderRadius:15,
      backgroundColor:'grey',
      height:500
    },
    group: {
      marginTop:20
    },
    button:{
      backgroundColor:'lightblue',
      padding:20,
      borderWidth:1,
    },
    buttonText: {
      fontSize:30,
    },
    input:{
      padding:10,
      borderRadius:15,
      height:40,
      borderWidth:1,
      backgroundColor:'white'
      
    },
    title: {
      fontSize:20,
    },
    center: {
     alignItems:'center'
    },
  });
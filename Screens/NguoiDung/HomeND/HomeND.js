import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
export default class HomeND extends Component {
    constructor (props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {          
            data: props.route.params,
        }
    }
    gotoDangNhap(){
        this.navigation.navigate('DangNhap');
    }
    render() {
        return(
            <View style={{backgroundColor:'pink',height:700}}>
                <View style={styles.header}>
                    <View>
                        <Text style={{fontSize:30,fontWeight:'bold',margin:15,color:'pink'}}>
                            Hello:{this.state.data.user}
                        </Text>
                        <Text style={{fontSize:20,fontWeight:'bold',margin:5,color:'pink'}}>
                            Is the Member
                        </Text>
                    </View>
                    <View>
                    <Text style={{fontSize:20,fontWeight:'bold',marginLeft:150,color:'pink'}} 
                    onPress={this.gotoDangNhap.bind(this)}>
                            Sign out
                        </Text>
                    </View>
                </View>
                <View style={styles.tap}>
                    <Text style={styles.textTap}>
                        Shop Rewards
                    </Text>
                </View>
                <View style={styles.tap}>
                    <Text style={styles.textTap}>
                        Liked
                    </Text>
                </View>
                <View style={styles.tap}>
                    <Text style={styles.textTap}>
                        Recently Viewed
                    </Text>
                </View>
                <View style={styles.tap}>
                    <Text style={styles.textTap}>
                        Super Voucher
                    </Text>
                </View>
                <View style={styles.tap}>
                    <Text style={styles.textTap}>
                        Setting User                               
                    </Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header:{
        backgroundColor:'red',
        height:100,
        backgroundColor:'grey',
        flexDirection:'row',
    },
    tap:{
        margin:10,
        backgroundColor:'orange',
        height:70,
        borderRadius:10,
    },
    textTap:{
        fontSize:20,
        fontWeight:'bold',
        margin:20,
        color:'white'
    }
});
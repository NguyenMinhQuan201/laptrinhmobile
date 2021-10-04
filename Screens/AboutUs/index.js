import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default class AboutUs extends Component{
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.gotoHomeND = this.gotoHomeND.bind(this);
  }

  gotoHomeND(){
    this.navigation.navigate('HomeND');
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={{fontSize: 16, color: '#30336b'}} onPress={this.gotoHomeND}>
            Back
          </Text>
        </View>
        <View style={styles.headerCenter}>
          <Text style={{fontSize: 26, color: '#30336b'}}>About Us</Text>
        </View>
        <View style={styles.headerRight}>

        </View>
      </View>
      
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dff9fb'
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#FF7979',
    height: 80,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
    
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
    flex: 1
  },
});
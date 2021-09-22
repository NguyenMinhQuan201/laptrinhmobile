import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Notify extends Component {
  constructor(props) {
    super(props);
    this.state={
      weight:'10',
      height:'10',
      bmi:0.00,
      level :'....',
    }
  }
  compute(){
    //console.log("press");
    //console.log(this.state)
    const{height,weight}=this.state;
    const n_height=parseFloat(height);
    const n_weight=parseFloat(weight);
    console.log(n_height,n_weight);

    const _bmi=n_weight/Math.pow(n_height/100,2);
    this.setState({bmi:_bmi})

    var _obesity='';
    if(_bmi>32){
      _obesity='Obese'
    }
    else if(_bmi>25&&_bmi<32){
      _obesity='Over Weight'
    }
    else if(_bmi>18.5&&_bmi<25){
      _obesity='Normal Weight'
    }
    else{
      _obesity='Under Weight'
    }
    this.setState({level :_obesity})
    console.log(this.state);
  }
  render() {
    return (
      <View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      flexDirection:'column',
      padding:20,
    }
  });

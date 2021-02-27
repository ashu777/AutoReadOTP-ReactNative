/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import RNOtpVerify from 'react-native-otp-verify'; 

class App extends React.Component{
 constructor(props) {
   super(props)
 
   this.state = {
      otp:'',
   }
 }
 
 componentDidMount = () => {
this.getHash();
  RNOtpVerify.addListener();
  RNOtpVerify.getOtp()
      .then((p) => RNOtpVerify.addListener(this.otpHandler))
      .catch((p) => console.log(p));

 }

 getHash = () => RNOtpVerify.getHash().then(console.log).catch(console.log); //this will generate hash and have to add with sms.

 otpHandler = (message) => {
  const otp = /(\d{6})/g.exec(message)[0];
  console.log('SMS :: ', message);
  console.log('OTP :: ', otp);

  this.setState(
    {
      otp: otp,
    }
  );
};
componentWillUnmount() {
  RNOtpVerify.removeListener();
}
  render() {
    return (
      <View>
        <Text style={{alignSelf:'center',marginTop:40}}>OTP will be appear below:</Text>
        <Text style={{alignSelf:'center',marginTop:10}}>{`OTP: ${this.state.otp}`}</Text>
      </View>
    )
  }
  
}
export default App;

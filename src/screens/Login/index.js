import React from 'react';
import {MatiGlobalIdSdk} from 'react-native-mati-global-id-sdk';
/* import * as mgsdk from 'react-native-mati-global-id-sdk'; */
//const MatiGlobalIdSdk = require('react-native-mati-global-id-sdk');
import {
  Button,
  View,
  StyleSheet
} from 'react-native';

const handleMatiClickButton = () => {
  /* const MatiVerifyResult = new NativeEventEmitter(NativeModules.MatiGlobalIdSdk)
  MatiVerifyResult.addListener('verificationSuccess', (data) => console.log(data))
  MatiVerifyResult.addListener('verificationCanceled', (data) => console.log(data))
 */
  console.log('Ejecutando SDK Mati...');
  
  const yourMetadata = { param1: 'value1', param2: 'value2' };
  console.log(MatiGlobalIdSdk);
  MatiGlobalIdSdk.showFlow(
    'YOUR_CLIENT_ID',
    'YOUR_FLOW_ID',
    yourMetadata
  );
};

export function flow() {
  /* return Iron(); */
  return(
  <View style={styles.simple}>
    <Button onPress={handleMatiClickButton} title="Click here" />
  </View>
  )
  /* return <LoginBiometricsScreen /> */
  /* return <HomeScreen /> */
}

//export default App;

const styles = StyleSheet.create({
  simple: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue',
  },
});

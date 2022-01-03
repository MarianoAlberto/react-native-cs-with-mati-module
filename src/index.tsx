//import React from 'react';
import { NativeModules, Platform } from 'react-native';
// @ts-ignore
import * as flow from './screens/Login';

const LINKING_ERROR =
  `The package 'react-native-cs-with-mati-module' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const CsWithMatiModule = NativeModules.CsWithMatiModule
  ? NativeModules.CsWithMatiModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return CsWithMatiModule.multiply(a, b);
}

export const HomeScreen = () => {
  console.log('flow es: ', typeof flow);
  return flow.flow();
};

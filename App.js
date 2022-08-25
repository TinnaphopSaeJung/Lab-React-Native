import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Weather from './component/Weather';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Weather zipCode="90110"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {                //ในส่วนนี้ไม่ได้เปลี่ยนเป็น padding เนื่องจากผมทำในเว็บ ไม่ได้ทำในมือถือ Android ครับ
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

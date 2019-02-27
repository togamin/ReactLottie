import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import LottieView from 'lottie-react-native';
import loading from './animation/load01.json';


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          source={loading}//アニメーション
          autoPlay //自動再生
          loop //繰り返し
          speed={1}//再生速度
          autoSize//アニメーションのサイズを自動調整
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

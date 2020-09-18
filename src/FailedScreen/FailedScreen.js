import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import LottieView from 'lottie-react-native';
import {styles} from '../StartScreen/styles';

const FailedScreen = (props) => {
  const {threshold} = props.route.params;
  const {navigation} = props;
  return (
    <View style={styles.mainView}>
      <SafeAreaView backgroundColor={'#92B6D4'} opacity={0.95} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Sorry</Text>
      </View>
      <View style={styles.instruction}>
        <Text style={styles.instructiontext}>
          Your Answer Was Wrong For {threshold} times.
        </Text>
      </View>
      {/* <View style={styles.animationBox}>
        <LottieView
          source={require('../../assets/animation/failed.json')}
          autoPlay
          loop
          style={styles.animation2}
        />
      </View> */}
      <View style={styles.buttonBox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Level1')}>
          <Text style={styles.txt}>Try Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FailedScreen;

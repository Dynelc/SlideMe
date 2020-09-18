import React from 'react';
import {styles} from '../StartScreen/styles';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import LottieView from 'lottie-react-native';

const SuccessScreen = (props) => {
  const {navigation} = props;

  return (
    <View style={styles.mainView}>
      <SafeAreaView backgroundColor={'#92B6D4'} opacity={0.95} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Congratulations</Text>
      </View>
      <View style={styles.instruction}>
        <Text style={styles.instructiontext}>You Are A Map Genius</Text>
      </View>
      {/* <View style={styles.animationBox}>
        <LottieView
          source={require('../../assets/animation/success.json')}
          autoPlay
          loop
          style={styles.animation2}
        />
      </View> */}
      <View style={styles.buttonBox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SelectionScreen')}>
          <Text style={styles.txt}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuccessScreen;

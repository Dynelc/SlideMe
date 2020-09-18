import React from 'react';
import {styles} from '../StartScreen/styles';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import LottieView from 'lottie-react-native';

const SuccessScreen = (props) => {
  const {level} = props.route.params;
  const {navigation} = props;
  const nextpage = level === 1 ? 'Level2' : level === 2 ? 'Level3' : 'Level1';

  return (
    <View style={styles.mainView}>
      <SafeAreaView backgroundColor={'#92B6D4'} opacity={0.95} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Congratulations</Text>
      </View>
      <View style={styles.instruction}>
        <Text style={styles.instructiontext}>
          You have completed Level {level}.
        </Text>
      </View>
      <View style={styles.animationBox}>
        <LottieView
          source={require('../assets/animations/congratulations.json')}
          autoPlay
          loop
          style={styles.animation2}
        />
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(nextpage)}>
          <Text style={styles.txt}>Next Level</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuccessScreen;

import React, {useState, useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {View, Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Level1/Styles';
import Colors from '../../Shared/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const Level2 = (props) => {
  const {navigation} = props;
  const Items = Colors.Colors;
  const [loading, setLoading] = useState(true);
  const [colors, setColors] = useState(Items);
  const [colorsOptions, setColorsOptions] = useState([]);
  const [displayOptions, setDisplayOptions] = useState(false);
  const [score, setScore] = useState(0);
  const [problem, setProblem] = useState(1);
  const [life, setLife] = useState(3);
  const myIcon = <Icon name="heart" style={styles.heartIcon} />;

  useEffect(() => {
    arrayShuffle();
    setTimeout(() => {
      setLoading(false);
      setDisplayOptions(true);
    }, 5000);
  }, []);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      setProblem(1);
      setScore(0);
      setLife(3);
      arrayShuffle();
      setLoading(true);
      setDisplayOptions(false);
      setTimeout(() => {
        setLoading(false);
        setDisplayOptions(true);
      }, 5000);
    });

    return unsubscribe;
  }, [props.navigation]);

  useEffect(() => {
    if (displayOptions === true) {
      getColorsOptions();
    }
  }, [displayOptions]);

  const arrayShuffle = (array) => {
    array = [...Items];
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    setColors(array);
  };

  const swap = (value1, value2) => {
    let array = [...colorsOptions];
    let temp = array[value1];
    array[value1] = array[value2];
    array[value2] = temp;
    setColorsOptions(array);
  };

  const colorSwap = (gestureName, gestureState, id) => {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    switch (gestureName) {
      case SWIPE_UP:
        console.log('swipe Up');
        switch (id) {
          case 0:
            swap(0, 3);
            break;
          case 1:
            swap(1, 4);
            break;
          case 2:
            swap(2, 5);
            break;
          case 3:
            swap(3, 0);
            break;
          case 4:
            swap(4, 1);
            break;
          case 5:
            swap(5, 2);
            break;
        }
        break;
      case SWIPE_DOWN:
        console.log('swipe Down');
        switch (id) {
          case 0:
            swap(0, 3);
            break;
          case 1:
            swap(1, 4);
            break;
          case 2:
            swap(2, 5);
            break;
          case 3:
            swap(3, 0);
            break;
          case 4:
            swap(4, 1);
            break;
          case 5:
            swap(5, 2);
            break;
        }
        break;
      case SWIPE_LEFT:
        console.log('swipe Left');
        switch (id) {
          case 0:
            swap(0, 2);
            break;
          case 1:
            swap(1, 0);
            break;
          case 2:
            swap(2, 1);
            break;
          case 3:
            swap(3, 5);
            break;
          case 4:
            swap(4, 3);
            break;
          case 5:
            swap(5, 4);
            break;
        }
        break;
      case SWIPE_RIGHT:
        console.log('shipe Right');
        switch (id) {
          case 0:
            swap(0, 1);
            break;
          case 1:
            swap(1, 2);
            break;
          case 2:
            swap(2, 0);
            break;
          case 3:
            swap(3, 4);
            break;
          case 4:
            swap(4, 5);
            break;
          case 5:
            swap(5, 3);
            break;
        }
        break;
    }
  };

  const getColorsOptions = () => {
    const array = colors.slice(0, 6);
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    setColorsOptions(array);
  };

  const checkAnswer = (colorsOptions) => {
    let value = 0;
    let lyf;
    console.log(colors);
    console.log(colorsOptions);
    for (let i = 0; i < colorsOptions.length; i++) {
      console.log(colors[i].id);
      console.log(colorsOptions[i].id);
      if (colors[i].id === colorsOptions[i].id) {
        value = value + 1;
      }
    }

    console.log(value);
    if (value === 6) {
      setScore(score + 1);
    } else {
      lyf = life - 1;
      setLife(lyf);
    }
    if (lyf === 0) {
      return navigation.navigate('FailedScreen');
    } else if (problem === 10) {
      return navigation.navigate('SuccessScreen', {level: 2});
    }
    setProblem(problem + 1);
    setDisplayOptions(false);
    setLoading(true);
    arrayShuffle();
    setTimeout(() => {
      setLoading(false);
      setDisplayOptions(true);
    }, 5000);
  };

  const renderIcon = () => {
    let array = [];
    for (let i = 0; i < life; i++) {
      array.push(<View key={i}>{myIcon}</View>);
    }
    return array;
  };

  const renderPattern = () => {
    if (colors.length > 0) {
      return (
        <View style={{flex: 1}}>
          <View style={styles.headerContainer1}>
            <Text style={styles.headerText1}>SlideMe</Text>
          </View>
          <View style={styles.animationBox}>
            <LottieView
              source={require('../../assets/animations/time.json')}
              autoPlay
              loop
              style={styles.animation}
            />
          </View>
          <View style={styles.instructionContainer}>
            <Text style={styles.instructionText}>
              Remember The Pattern Shown Below
            </Text>
            <View style={styles.patternContainerRender}></View>
            <View style={styles.colorBox}>
              <View
                style={[
                  styles.individualColor,
                  {backgroundColor: colors[0].value},
                ]}></View>
              <View
                style={[
                  styles.individualColor,
                  {backgroundColor: colors[1].value},
                ]}></View>
              <View
                style={[
                  styles.individualColor,
                  {backgroundColor: colors[2].value},
                ]}></View>
            </View>
            <View style={styles.colorBox}>
              <View
                style={[
                  styles.individualColor,
                  {backgroundColor: colors[3].value},
                ]}></View>
              <View
                style={[
                  styles.individualColor,
                  {backgroundColor: colors[4].value},
                ]}></View>
              <View
                style={[
                  styles.individualColor,
                  {backgroundColor: colors[5].value},
                ]}></View>
            </View>
          </View>
        </View>
      );
    }
  };

  const renderDisplayOptions = () => {
    if (colorsOptions.length > 0) {
      return (
        <View style={{flex: 1}}>
          {console.log(colors)}
          <View style={styles.scoreContainer}>
            <View style={styles.scoreBox}>
              <Text style={styles.scoreText}>Level 2</Text>
            </View>
            <View style={styles.iconContainer}>
              {/* <Text style={styles.iconText}>Life</Text> */}
              {renderIcon()}
            </View>
            <View style={styles.scoreBox}>
              <Text style={styles.scoreText}>{score} Points</Text>
            </View>
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>SlideMe</Text>
            <Text style={styles.subheaderText}>BrainGame</Text>
          </View>
          <View style={styles.problemContainer}>
            <Text style={styles.scoreText}>Problem</Text>
            <Text style={styles.scoreText}>{problem} | 10</Text>
          </View>

          <View style={styles.instructionContainer}>
            <Text style={styles.instructionText}>Slide The Color Box.</Text>
            <Text style={styles.instructionText}>
              Try To Match The Pattern Shown Before.
            </Text>
            <Text style={styles.instructionText}>
              Click Next After Finished.
            </Text>
          </View>
          <View style={styles.patternContainerDisplay}>
            <View style={styles.colorBox}>
              <GestureRecognizer
                onSwipe={(direction, colorsOptions) =>
                  colorSwap(direction, colorsOptions, (id = 0))
                }>
                <View
                  style={[
                    styles.individualColor,
                    {backgroundColor: colorsOptions[0].value},
                  ]}></View>
              </GestureRecognizer>
              <GestureRecognizer
                onSwipe={(direction, colorsOptions) =>
                  colorSwap(direction, colorsOptions, (id = 1))
                }>
                <View
                  style={[
                    styles.individualColor,
                    {backgroundColor: colorsOptions[1].value},
                  ]}></View>
              </GestureRecognizer>
              <GestureRecognizer
                onSwipe={(direction, colorsOptions) =>
                  colorSwap(direction, colorsOptions, (id = 2))
                }>
                <View
                  style={[
                    styles.individualColor,
                    {backgroundColor: colorsOptions[2].value},
                  ]}></View>
              </GestureRecognizer>
            </View>
            <View style={styles.colorBox}>
              <GestureRecognizer
                onSwipe={(direction, colorsOptions) =>
                  colorSwap(direction, colorsOptions, (id = 3))
                }>
                <View
                  style={[
                    styles.individualColor,
                    {backgroundColor: colorsOptions[3].value},
                  ]}></View>
              </GestureRecognizer>
              <GestureRecognizer
                onSwipe={(direction, colorsOptions) =>
                  colorSwap(direction, colorsOptions, (id = 4))
                }>
                <View
                  style={[
                    styles.individualColor,
                    {backgroundColor: colorsOptions[4].value},
                  ]}></View>
              </GestureRecognizer>
              <GestureRecognizer
                onSwipe={(direction, colorsOptions) =>
                  colorSwap(direction, colorsOptions, (id = 5))
                }>
                <View
                  style={[
                    styles.individualColor,
                    {backgroundColor: colorsOptions[5].value},
                  ]}></View>
              </GestureRecognizer>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => checkAnswer(colorsOptions)}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView backgroundColor={'#92B6D4'} opacity={0.95} />

      {loading ? renderPattern() : null}
      {displayOptions && renderDisplayOptions()}
    </View>
  );
};

export default Level2;

import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './Styles';
import Colors from '../../Shared/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const Level1 = () => {
  const Items = Colors.Colors;
  const [loading, setLoading] = useState(true);
  const [colors, setColors] = useState(Items);
  const [colorsOptions, setColorsOptions] = useState([]);
  const [displayOptions, setDisplayOptions] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setDisplayOptions(true);
    }, 3000);
  }, []);

  useEffect(() => {
    if (displayOptions === true) {
      getColorsOptions();
    }
  }, [displayOptions]);

  const colorSwap = (gestureName, gestureState, id) => {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    switch (gestureName) {
      case SWIPE_UP:
        console.log(id);
        console.log('swipe Up');
        switch (id) {
          case 0:
            console.log('hello case 0');
            let array = [...colorsOptions];
            let temp = array[0];
            array[0] = array[2];
            array[2] = temp;
            setColorsOptions(array);
            break;
          case 1:
            break;
          case 2:
            break;
          case 3:
            breaak;
        }
        break;
      case SWIPE_DOWN:
        console.log('swipe Down');
        break;
      case SWIPE_LEFT:
        console.log('swipe Left');
        break;
      case SWIPE_RIGHT:
        console.log('shipe Right');
        break;
    }
  };

  const getColorsOptions = () => {
    const array = colors.slice(0, 4);
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    setColorsOptions(array);
  };

  const renderPattern = () => {
    return (
      <View style={{flex: 1}}>
        <View style={styles.instructionContainer}>
          <Text style={styles.instructionText}>
            Remember The Pattern Shown Below
          </Text>
        </View>
        <View style={styles.patternContainer}>
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
          </View>
          <View style={styles.colorBox}>
            <View
              style={[
                styles.individualColor,
                {backgroundColor: colors[2].value},
              ]}></View>
            <View
              style={[
                styles.individualColor,
                {backgroundColor: colors[3].value},
              ]}></View>
          </View>
        </View>
      </View>
    );
  };

  const renderDisplayOptions = () => {
    if (colorsOptions.length > 0) {
      return (
        <View style={{flex: 1}}>
          <View style={styles.instructionContainer}>
            <Text style={styles.instructionText}>
              Slide The Color Box To Match The Pattern Shown Before.
            </Text>
          </View>
          {console.log(colorsOptions)}
          <View style={styles.patternContainer}>
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
            </View>
            <View style={styles.colorBox}>
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
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>SlideMe</Text>
      </View>
      {loading ? renderPattern() : null}
      {displayOptions && renderDisplayOptions()}
    </View>
  );
};

export default Level1;

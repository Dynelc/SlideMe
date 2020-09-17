import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: '30@ms',
  },
  instructionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructionText: {
    textAlign: 'center',
  },
  patternContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorBox: {flexDirection: 'row'},
  individualColor: {
    height: '80@ms',
    width: '80@ms',
    margin: '2@ms',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20@ms',
  },
  button: {
    height: '50@ms',
    width: '100@ms',
    backgroundColor: 'blue',
    justifyContent: 'center',
    borderRadius: '5@ms',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: '20@ms',
  },
});

export default styles;

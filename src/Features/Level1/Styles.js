import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333533',
    marginTop: '5@ms',
    marginHorizontal: '5@ms',
  },
  headerText: {
    fontSize: '30@ms',
    color: 'white',
    padding: '5@ms',
    fontFamily: 'Fredericka the Great Regular',
  },
  problemContainer: {
    margin: '20@ms',
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333533',
    padding: '10@ms',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartIcon: {
    textAlign: 'center',
    fontSize: '30@ms',
    paddingHorizontal: '5@ms',
    color: 'red',
  },
  scoreText: {
    fontSize: '20@ms',
    textAlign: 'center',
    color: 'white',
  },
  instructionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20@ms',
  },
  instructionText: {
    textAlign: 'center',
    color: 'white',
  },
  patternContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  colorBox: {flexDirection: 'row'},
  individualColor: {
    height: '80@ms',
    width: '80@ms',
    margin: '2@ms',
    borderRadius: '5@ms',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20@ms',
  },
  button: {
    height: '50@ms',
    width: '100@ms',
    backgroundColor: '#333533',
    justifyContent: 'center',
    borderRadius: '5@ms',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: '20@ms',
    color: 'white',
  },
});

export default styles;

import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20@ms',
    marginHorizontal: '5@ms',
  },
  headerContainer1: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5@ms',
    backgroundColor: '#333533',
  },
  headerText1: {
    fontSize: '30@ms',
    color: 'white',
    padding: '5@ms',
    fontFamily: 'Fredericka the Great Regular',
  },
  headerText: {
    fontSize: '30@ms',
    color: 'white',
    fontFamily: 'Fredericka the Great Regular',
  },
  subheaderText: {
    fontSize: '16@ms',
    color: 'white',
  },
  problemContainer: {
    margin: '20@ms',
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '10@ms',
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
  scoreBox: {
    justifyContent: 'center',
    borderWidth: '1@ms',
    borderColor: 'white',
    width: '25%',
    height: '40@ms',
    borderRadius: '5@ms',
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
  patternContainerRender: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '30@ms',
  },
  patternContainerDisplay: {
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
  animation: {
    height: '100@vs',
    width: '100@vs',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationBox: {
    marginVertical: '10@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;

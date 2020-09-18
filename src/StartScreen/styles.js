import {ScaledSheet} from 'react-native-size-matters';
export const styles = ScaledSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    alignItems: 'center',
    marginTop: '50@ms',
  },
  headerText: {
    color: 'white',
    fontSize: '40@ms',
    fontFamily: 'Fredericka the Great Regular',
  },
  subheaderText: {
    fontSize: '16@ms',
    color: 'white',
  },
  animation: {
    height: '220@vs',
    width: '200@vs',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation2: {
    height: '3000@ms',
    width: '3000@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationBox: {
    marginVertical: '10@ms',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
  },
  instruction: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructiontext: {
    fontSize: '15@ms',
    color: 'white',
  },
  instructionTextTitle: {
    margin: '8@ms',
    color: 'white',
    fontSize: '20@ms',
    fontWeight: 'bold',
  },
  buttonBox: {flex: 1, justifyContent: 'center'},
  button: {
    margin: '10@ms',
    backgroundColor: '#fff',
    elevation: 4,
    height: '50@ms',
    width: '120@ms',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: '5@ms',
  },
  txt: {
    fontSize: '20@ms',
  },
});

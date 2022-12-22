import {StyleSheet} from 'react-native';
import colors from '../../const/colors';

const styles = StyleSheet.create({
  screenContainer: {
    width: '100%',
    height: '100%',
  },
  flatListContainer: {
    width: '80.54%',
    alignSelf: 'center',
    marginTop: '30%',
    height: '57%',
    marginBottom: '10%',
  },
  backFlatList: {backgroundColor: '#FFFFFF', borderRadius: 10, height: '100%'},
  img: {
    position: 'absolute',
    zIndex: 99,
    top: '-12%',
    alignSelf: 'center',
  },
  marginTop: {marginTop: '15%'},
  btn1: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    width: '80.54%',
    alignSelf: 'center',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbtn1: {
    color: colors.texts.blue,
  },
  btn2: {
    backgroundColor: colors.buttons.blue2,
    borderRadius: 5,
    width: '80.54%',
    alignSelf: 'center',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textbtn2: {
    color: colors.texts.white,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import colors from '../../../const/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 25,
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 7.68,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.82,
    color: colors.texts.blue,
    marginLeft: 5.54,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import colors from '../../../const/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginVertical: 15,
  },
  btn: {
    backgroundColor: '#FFFFFF',
    borderRadius: 7,
    paddingHorizontal: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbtn: {
    color: colors.texts.blue,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 21.82,
  },
  date: {
    color: colors.texts.white,
    fontSize: 16,
    lineHeight: 21.82,
    fontWeight: '400',
  },
  playersC: {
    color: colors.texts.white,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 21.82,
  },
});

export default styles;

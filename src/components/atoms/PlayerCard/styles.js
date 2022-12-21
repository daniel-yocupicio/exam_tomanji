import {StyleSheet} from 'react-native';
import colors from '../../../const/colors';

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 5,
  },
  number: {
    fontSize: 18,
  },
  name: {
    fontSize: 16,
    marginLeft: 11,
    color: colors.texts.black,
    fontWeight: '700',
    lineHeight: 21.82,
  },
  w1: {
    display: 'flex',
    flexDirection: 'row',
    width: '15%',
    maxWidth: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  w2: {
    display: 'flex',
    flexDirection: 'row',
    width: '70%',
    maxWidth: '70%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  w3: {
    display: 'flex',
    flexDirection: 'row',
    width: '15%',
    maxWidth: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  x: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.82,
    color: colors.texts.black,
  },
});

export default styles;

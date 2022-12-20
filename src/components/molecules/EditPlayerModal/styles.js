import {StyleSheet} from 'react-native';
import colors from '../../../const/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000BA',
  },
  subcontainer: {
    width: '80.54%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: '22.76%',
  },
  title: {
    color: colors.texts.black,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24.55,
    marginTop: 19.46,
    alignSelf: 'center',
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.82,
    color: colors.texts.gray2,
    alignSelf: 'center',
    maxWidth: '80.54%',
    marginTop: 12.54,
  },
  closeButton: {
    height: 34,
    width: 34,
    borderRadius: 20,
    backgroundColor: colors.buttons.orange2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: -10,
    top: -10,
  },
  iconButton: {},
});

export default styles;

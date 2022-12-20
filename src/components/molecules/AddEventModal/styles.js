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
    marginTop: '6.16%',
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
  btnPlay: {
    backgroundColor: colors.buttons.green,
    width: '80.54%',
    alignSelf: 'center',
    marginTop: 24.5,
    borderRadius: 4,
    paddingVertical: 7.34,
    alignItems: 'center',
    marginBottom: 18,
  },
  textPlay: {
    color: colors.texts.white,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24.55,
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
  input: {
    width: '60.5%',
    borderBottomWidth: 1,
    marginTop: '5.10%',
    borderColor: colors.input.gray,
    fontSize: 18,
    height: 35,
    padding: 0,
    lineHeight: 24.55,
    alignSelf: 'center',
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import colors from '../../const/colors';

const styles = StyleSheet.create({
  screenSize: {
    height: '100%',
    width: '100%',
  },
  logo: {
    marginTop: '9.976%',
    alignSelf: 'center',
  },
  confirmButton: {
    backgroundColor: colors.buttons.blue,
    width: 302,
    alignSelf: 'center',
    borderRadius: 4,
    paddingVertical: 17,
    marginTop: '3.079%',
  },
  confirmText: {
    color: colors.texts.gray1,
    fontSize: 18,
    alignSelf: 'center',
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import colors from '../../../const/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
  },
  historyButton: {
    position: 'absolute',
    bottom: 17.79,
    backgroundColor: colors.buttons.orange,
    display: 'flex',
    flexDirection: 'row',
    height: 45.06,
    width: '75.16%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  historyIcon: {
    marginRight: 15,
  },
  historyText: {
    color: colors.texts.white,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 25,
  },
  icon: {
    marginTop: '24.751%',
  },
  textAddPlayer: {
    color: colors.texts.blue,
    fontSize: 18,
    marginTop: 15.97,
  },
  textNoPlayers: {
    color: colors.texts.gray2,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    marginTop: 14.14,
  },
});

export default styles;

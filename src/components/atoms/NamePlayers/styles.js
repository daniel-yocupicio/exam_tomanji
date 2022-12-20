import {StyleSheet} from 'react-native';
import colors from '../../../const/colors';

const styles = StyleSheet.create({
  playerContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80.08%',
    marginTop: 17.54,
    alignSelf: 'center',
  },
  player: {
    backgroundColor: colors.buttons.gray,
    paddingHorizontal: 7,
    paddingVertical: 2,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 2,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 4,
  },
  playerText: {
    color: colors.texts.black,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 21.82,
    marginRight: 7,
  },
  playerIcon: {
    marginTop: 2,
  },
});

export default styles;

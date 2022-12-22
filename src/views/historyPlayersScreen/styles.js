import {StyleSheet} from 'react-native';
import colors from '../../const/colors';

const styles = StyleSheet.create({
  headerContainer: {
    width: '80.54%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '20.5%',
  },
  nameEvent: {
    color: colors.texts.white,
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 30,
    marginTop: '10%',
    fontStyle: 'italic',
  },
  listHeaders: {
    display: 'flex',
    flexDirection: 'row',
    width: '80.54%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: '10%',
  },
  players: {
    color: colors.texts.white,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24.55,
  },
  date: {
    color: colors.texts.white,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.82,
  },
  flatListContainer: {
    width: '80.54%',
    alignSelf: 'center',
    marginTop: '10%',
  },
  flatList47: {height: '47%'},
  flatList40: {height: '40%'},
  playerContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  number: {
    color: colors.texts.white,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.82,
    marginRight: 10,
  },
  name: {
    color: colors.texts.white,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 21.82,
  },
  btn: {
    width: '80.54%',
    backgroundColor: colors.buttons.blue2,
    alignSelf: 'center',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    marginTop: '10%',
    position: 'absolute',
    bottom: '8%',
  },
  img: {
    width: 86,
    height: 86,
    marginBottom: '-5%',
    marginTop: '-2%',
    borderRadius: 45,
  },
  img2: {display: 'none'},
  textbtn: {
    color: colors.texts.white,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24.55,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import colors from '../../../const/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '80.54%',
    height: '58.497%',
    borderRadius: 12,
    marginTop: '3.173%',
    alignSelf: 'center',
  },
  containerFlatList: {
    marginVertical: '6%',
    marginHorizontal: '4%',
  },
  addplayerText: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24.55,
    color: colors.texts.blue,
  },
  flatlistSize: {
    height: '90%',
    maxHeight: '92%',
  },
  btn: {
    height: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import colors from '../../../const/colors';

const styles = (value1 = false) =>
  StyleSheet.create({
    container: {
      marginTop: 22.46,
    },
    addPlayerContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignSelf: 'center',
      width: '80.08%',
      justifyContent: 'space-between',
      paddingHorizontal: 5,
    },
    input: {
      width: '70.5%',
      borderBottomWidth: 1,
      borderColor: colors.input.gray,
      fontSize: 18,
      height: 35,
      padding: 0,
    },
    addPlayerButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 34,
      height: 35,
      backgroundColor: colors.buttons.blue2,
      borderRadius: 5,
    },
    warning: {
      display: value1 ? 'flex' : 'none',
      flexDirection: 'row',
      width: '80.08%',
      alignSelf: 'center',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    warningText: {
      color: colors.texts.red,
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 19,
      marginLeft: 3.35,
    },
  });

export default styles;

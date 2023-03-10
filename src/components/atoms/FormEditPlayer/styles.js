import {StyleSheet} from 'react-native';
import colors from '../../../const/colors';

const styles = (value1 = false) =>
  StyleSheet.create({
    btn: {
      backgroundColor: colors.buttons.green,
      width: '80.54%',
      alignSelf: 'center',
      marginTop: 24.5,
      borderRadius: 4,
      paddingVertical: 7.34,
      alignItems: 'center',
      marginBottom: 18,
    },
    container: {
      marginTop: '5.3%',
    },
    textbtn: {
      color: colors.texts.white,
      fontSize: 18,
      fontWeight: '700',
      lineHeight: 24.55,
    },
    imageInput: {
      display: 'flex',
      flexDirection: 'row',
      width: '80.54%',
      alignSelf: 'center',
    },
    img: {
      width: 40,
      height: 40,
      marginRight: 15,
      borderRadius: 45,
    },
    input: {
      height: 40,
      flex: 1,
      borderBottomWidth: 1,
      borderColor: colors.input.gray,
      fontSize: 16,
      fontWeight: '700',
      lineHeight: 21.82,
    },
    edit: {
      position: 'absolute',
      zIndex: 99,
      right: 11,
      top: -5,
    },
    warning: {
      display: value1 ? 'flex' : 'none',
      flexDirection: 'row',
      alignSelf: 'center',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginBottom: 10,
    },
    warningText: {
      color: colors.texts.red,
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 19,
      marginLeft: 3.35,
    },
    tooltip: {
      display: value1 ? 'flex' : 'none',
      position: 'absolute',
      width: '126%',
      top: 50,
      left: '-13%',
      zIndex: 99,
    },
    tooltipContainer: {
      backgroundColor: '#ffffff',
      borderRadius: 6,
    },
    triangle: {
      width: 20,
      height: 20,
      backgroundColor: '#ffffff',
      borderColor: '#00000010',
      borderWidth: 1,
      left: '13%',
      position: 'absolute',
      transform: [{rotate: '45deg'}],
      zIndex: -1,
      top: -5,
    },
    title: {
      color: colors.texts.black,
      fontSize: 18,
      fontWeight: '700',
      lineHeight: 24.55,
      marginTop: 19.46,
      alignSelf: 'center',
      marginBottom: '2%',
    },
    imagesRow: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: '5%',
      width: '70%',
      alignSelf: 'center',
    },
    openPhotoText: {
      color: colors.texts.blue,
      fontSize: 18,
      fontWeight: '700',
      lineHeight: 24.55,
      marginLeft: 5,
    },
    openPhotos: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 25,
      marginTop: '4.653%',
      marginBottom: '3.308%',
    },
  });

export default styles;

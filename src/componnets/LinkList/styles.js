import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  linkContainer: {
    padding: 10,
  },
  linkItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#303030',
    borderRadius: 8,
  },
  text: {
    color: '$textColor',
    fontFamily: '$primaryFont',
    fontSize: '$primaryFontSize',
  },
});

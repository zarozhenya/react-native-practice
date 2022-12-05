import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  text: {
    color: '$textColor',
    fontFamily: '$primaryFont',
    fontSize: 16,
    textAlign: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '$textColor',
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#F44336',
    padding: 4,
    borderRadius: 20,
  },
});

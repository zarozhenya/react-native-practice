import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  form: {
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: '$primaryFont',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#002ead',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',

    width: 100,
    padding: 8,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  field: {
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 8,
    marginBottom: 10,
    height: 40,
  },
});

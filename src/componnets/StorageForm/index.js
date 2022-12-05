import React, {useState} from 'react';
import {Pressable, Text, TextInput, View, Keyboard} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {styles} from './styles';

export const StorageForm = ({onSubmit}) => {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const handleSubmit = () => {
    Keyboard.dismiss();
    if (value === '' || key === '') {
      showMessage({
        type: 'danger',
        message: 'Both fields must be filled in!',
        icon: 'danger',
      });
      return;
    }
    onSubmit({key, value});
    setKey('');
    setValue('');
  };
  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Key"
        value={key}
        style={styles.field}
        autoCorrect={false}
        placeholderTextColor="#C7C7CD"
        onChangeText={setKey}
      />
      <TextInput
        placeholder="Value"
        value={value}
        style={styles.field}
        autoCorrect={false}
        placeholderTextColor="#C7C7CD"
        onChangeText={setValue}
      />
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit!</Text>
      </Pressable>
    </View>
  );
};

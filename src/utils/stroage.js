import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAllKeysAndData = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    if (keys.length === 0) {
      return keys;
    }
    const data = await AsyncStorage.multiGet(keys);
    return data;
  } catch {
    throw new Error('Error occured while reading from the storage!');
  }
};

export const addItem = async ({key, value}) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch {
    throw new Error('Error occured while writing to the storage!');
  }
};

export const deleteItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch {
    throw new Error('Error occured while deleting from the storage!');
  }
};

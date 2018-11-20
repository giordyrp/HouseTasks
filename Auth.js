import { AsyncStorage } from 'react-native';

export const setValueOnKey = (KEY,VALUE) => AsyncStorage.setItem(KEY,JSON.stringify(VALUE));

export const removeKey = (KEY) => AsyncStorage.removeItem(KEY);

export const getValueFromKey = (KEY) => {
  return new Promise((resolve,reject) => {
    AsyncStorage.getItem(KEY)
    .then(res => {
      if (res != null){
        resolve(JSON.parse(res));
      }else{
        resolve('empty');
      }
    })
    .catch(err => reject(err));
  });
};

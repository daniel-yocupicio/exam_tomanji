import firestore from '@react-native-firebase/firestore';

export function setFunction(collection, id, data) {
  return firestore().collection(collection).doc(id).set(data);
}

export function getFunction(collection, key, operator, value) {
  return firestore().collection(collection).get();
}

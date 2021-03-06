import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyC4zS4BJRBXZG0mBvnt9mz7RXT0AgG0jiA",
    authDomain: "crwn-clothing-c1ff6.firebaseapp.com",
    databaseURL: "https://crwn-clothing-c1ff6.firebaseio.com",
    projectId: "crwn-clothing-c1ff6",
    storageBucket: "crwn-clothing-c1ff6.appspot.com",
    messagingSenderId: "930333904473",
    appId: "1:930333904473:web:f9ac864f138d259e392b48"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };


  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

  export default firebase;
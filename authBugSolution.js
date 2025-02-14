import { onAuthStateChanged, auth } from './firebaseConfig'; //Import necessary Firebase configurations

let unsubscribe; //Variable to store the unsubscribe function

export const observeAuthenticationState = () => {
  unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      console.log('User is signed in:', user.uid);
    } else {
      // User is signed out
      console.log('User is signed out');
    }
  });
};

export const unsubscribeAuthentication = () => {
  if (unsubscribe) {
    unsubscribe(); //Clean up when the component unmounts or is no longer needed
  }
};
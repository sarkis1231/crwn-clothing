import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCN6TdFbXkZl0TmpHUJJCPAL-ESDEAN6To",
    authDomain: "old-ashtarak.firebaseapp.com",
    databaseURL: "https://old-ashtarak.firebaseio.com",
    projectId: "old-ashtarak",
    storageBucket: "old-ashtarak.appspot.com",
    messagingSenderId: "106430767200",
    appId: "1:106430767200:web:41d47e198185c7eefee305"
};

firebase.initializeApp(config)


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

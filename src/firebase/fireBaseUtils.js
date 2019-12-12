import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { API } from '../config'


const config = {
    apiKey: `${API}`,
    authDomain: "old-ashtarak.firebaseapp.com",
    databaseURL: "https://old-ashtarak.firebaseio.com",
    projectId: "old-ashtarak",
    storageBucket: "old-ashtarak.appspot.com",
    messagingSenderId: "106430767200",
    appId: "1:106430767200:web:41d47e198185c7eefee305"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const respons = await userRef.get();


    if (!respons.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {

            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });

        } catch (err) {
            console.log(err.message);
        }
    }

    return userRef;
}


firebase.initializeApp(config)


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

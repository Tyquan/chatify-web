import * as firebase from 'firebase';

// should go in a secret file
const config = {
    apiKey: "AIzaSyDH7_eLpbegSAsOJ9wxE4Ms2yZt_CUOhKU",
    authDomain: "whatsvi-32455.firebaseapp.com",
    databaseURL: "https://whatsvi-32455.firebaseio.com",
    projectId: "whatsvi-32455",
    storageBucket: "whatsvi-32455.appspot.com",
    messagingSenderId: "742079007722"
};
firebase.initializeApp(config);

export default firebase;
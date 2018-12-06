import * as firebase from 'firebase';

 var config = {
    apiKey: "AIzaSyDejPylxjN68hcfQ1MIqUSbBF7AIeuiJl8",
    authDomain: "musicpond-1ea26.firebaseapp.com",
    databaseURL: "https://musicpond-1ea26.firebaseio.com",
    projectId: "musicpond-1ea26",
    storageBucket: "musicpond-1ea26.appspot.com",
    messagingSenderId: "532950490786"
  };

if(!firebase.apps.length){
    firebase.initializeApp(config);
}

export default firebase;
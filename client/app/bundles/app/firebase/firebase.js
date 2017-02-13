import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyD1oP-8xNXvv2ZKFpjVwVX1N5rDf59WYBQ",
    authDomain: "svichallenge.firebaseapp.com",
    databaseURL: "https://svichallenge.firebaseio.com",
    storageBucket: "svichallenge.appspot.com",
    messagingSenderId: "27653035710"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export const githubProvider = new firebase.auth.GithubAuthProvider();
export const firebaseRef = firebase.database().ref();
export default firebase;
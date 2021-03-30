import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyDwWJkIAYUXe6ypmMM__6QIQvw4jDv9uhc',
	authDomain: 'hotair2-5e895.firebaseapp.com',
	projectId: 'hotair2-5e895',
	storageBucket: 'hotair2-5e895.appspot.com',
	messagingSenderId: '122296470914',
	appId: '1:122296470914:web:3e8d827d3ef87582fc939b',
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

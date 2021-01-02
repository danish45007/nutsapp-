// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebase = require('firebase');
const firebaseConfig = {
	apiKey: 'AIzaSyCsP2Cio-DDajQa2W1Ahr776FCzNV_hLT0',
	authDomain: 'whatsapp-mern-c8b43.firebaseapp.com',
	databaseURL: 'https://whatsapp-mern-c8b43.firebaseio.com',
	projectId: 'whatsapp-mern-c8b43',
	storageBucket: 'whatsapp-mern-c8b43.appspot.com',
	messagingSenderId: '771385740417',
	appId: '1:771385740417:web:bf41f6af95bb6cc6939180',
	measurementId: 'G-VBM1297EE1',
};

// init firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// init auth
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

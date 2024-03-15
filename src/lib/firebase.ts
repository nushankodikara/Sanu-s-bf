import { initializeApp } from 'firebase/app';
import {
	createUserWithEmailAndPassword,
	updateProfile,
	type Auth,
	signInWithEmailAndPassword
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDcZBBvr-rhuJmf2bG1m6-XMIM7bXBn6C8',
	authDomain: 'pure-promise.firebaseapp.com',
	projectId: 'pure-promise',
	storageBucket: 'pure-promise.appspot.com',
	messagingSenderId: '46657508467',
	appId: '1:46657508467:web:ceb67643ab5f2ef06b8606',
	measurementId: 'G-WQH754YE8G'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

// create new account and update display name
export const createUser = async (
	auth: Auth,
	email: string,
	password: string,
	displayName: string
) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(auth, email, password);
		await updateProfile(userCredential.user, { displayName });
		return { type: 'success' };
	} catch (error) {
		return { type: 'error', error };
	}
};

// login with email and password
export const login = async (auth: Auth, email: string, password: string) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
		return { type: 'success' };
	} catch (error) {
		return { type: 'error', error };
	}
};

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAg1QGrN91Rr-ReS3PlcN3xEtEDPfWgJYw',
  authDomain: 'technet-web-b0260.firebaseapp.com',
  projectId: 'technet-web-b0260',
  storageBucket: 'technet-web-b0260.appspot.com',
  messagingSenderId: '164995687653',
  appId: '1:164995687653:web:a703b3bf779dc36001600c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

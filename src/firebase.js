import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGE_ID,
  appId: process.env.APP_ID,
}

firebase.initializeApp(firebaseConfig)

const firebaseInit = firebase
const dbService = firebase.firestore()
const authService = firebase.auth()
const storageService = firebase.storage()

export { firebaseInit, dbService, authService, storageService }

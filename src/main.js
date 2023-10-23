import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from "firebase";
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'

createApp({
    App,
    created() {
                const firebaseConfig = {
                apiKey: 'AIzaSyDLd3FTdK4i6EjT0lZroAM_OzguyDAjp5s',
                authDomain: 'registration-565a6.firebaseapp.com',
                databaseURL: 'https://registration-565a6-default-rtdb.europe-west1.firebasedatabase.app',
                projectId: 'registration-565a6',
                storageBucket: 'registration-565a6.appspot.com',
                messagingSenderId: '1003149451035',
                appId: '1:1003149451035:web:b602b3bdd67f6e94c87dbe'
            }
            firebase.initializeApp(firebaseConfig)
    }
}).use(store).use(router).mount('#app')

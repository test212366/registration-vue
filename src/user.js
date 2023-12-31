import firebase from 'firebase/app'

export default {
    state: {
        user: null
    },
    mutation: {},
    actions: {
        async registerUser ({email,password}) {
            const user = await firebase.auth().createUserWithEmailAndPassword(email,password)
            console.log(user)
        }
    },
    getters: {
        user(state) {
            return state.user
        },
        checkUser (state) {
            return state.user !== null
        }
    }

}
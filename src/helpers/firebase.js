import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'

import store from '../store'
import router from '../router'
import config from '../config'

export const isLoggedIn = () => {
    return firebase.auth().currentUser !== null
};

export const isLimited = () => {
    return store.state.isLimited || false;
};

/**
 * Déconnexion de firebase
 * @param router
 * @returns {Promise<any>}
 */
export const firebaseSignOut = () => {
    return firebase.auth().signOut().then(() => {
        return store.commit('disconnect');
    }).then(() => {
        return router.push('/login');
    })
};

/**
 * Connexion via Firebase
 * @returns {Promise<any>}
 */
export const firebaseSignIn = () => {
    let provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/plus.login');

    return firebase.auth().signInWithPopup(provider)
        .then(data => handleUserDataFromGoogle(data.user));
};

/**
 * New user if creation time is last sign in time
 * @returns {boolean}
 */
export const isNewUser = (user = undefined) => {
    let currentUser = user !== undefined ? user : firebase.auth().currentUser;

    if (currentUser) {
        const userMetadata = currentUser.metadata;
        return userMetadata.creationTime === userMetadata.lastSignInTime;
    }
};

export const isAdmin = () => {
    return false;
};

/**
 * Watch the authChange and set the user in the store
 */
export const listenForAuthChange = () => {
    return firebase.auth().onAuthStateChanged(user => {
        return handleUserDataFromGoogle(user);
    })
};

/**
 * @param user
 * @returns {Promise<void>}
 */
export const handleUserDataFromGoogle = (user) => {
    // New user are allowed to connect ?
    if (!config.newUserAllowed && isNewUser(user)) {
        return firebaseSignOut().then(() => store.commit('setUser', null));
    } else {
        // Got Auth back from google, the application is now ready
        if (user) {
            // Anonymous User not allowed
            if (user.isAnonymous) {
                return firebaseSignOut().then(() => store.commit('setUser', null));
            }

            store.commit('applicationStarted');
            store.commit('setUser', user);

        } else {
            store.commit('applicationStarted');
            store.commit('setUser', null);
            store.commit('setLimited', false);
        }
    }
};
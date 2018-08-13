import {firebaseMutations} from 'vuexfire'

/**
 * Action synchrone dans le store
 */

export default {
    applicationStarted: (state) => {
        state.applicationStarted = true
    },
    setUser: (state, user) => {
        state.user = user
    },
    setLimited: (state, isLimited) => {
        state.isLimited = isLimited;
    },
    disconnect: (state) => {},
    ...firebaseMutations
}

/**
 * Getters du store
 */

export default {
    isApplicationStarted: state => state.applicationStarted,
    getUser: state => state.user,
    isLoggedIn: state => state.user !== null,
    isAdmin: state => state.isAdmin,
}

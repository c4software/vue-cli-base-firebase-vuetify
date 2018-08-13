import Vue from 'vue'
import Router from 'vue-router'
import {isAdmin, isLoggedIn} from "../helpers/firebase";
import store from "../store";
import routes from "./routes";

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    }
});

router.beforeEach((to, from, next) => {
    if (store.getters.isApplicationStarted) {
        handleRoute(to, from, next);
    } else {
        // Application not started wait until « applicationStarted » is set to true.
        store.watch((state) => state.applicationStarted, (ready) => {
            if (ready) {
                console.log("Application ready");
                handleRoute(to, from, next);
            }
        });
    }
});

let handleRoute = (to, from, next) => {
    if (to.meta !== undefined) {
        if (!isLoggedIn() && to.meta.secure) {
            // Restricted path, and user not loggedin
            next({path: '/login', replace: true});
        } else if (isLoggedIn() && to.meta.admin && !isAdmin()) {
            // User try to access to an admin feature without being an admin
            next({path: '/', replace: true});
        } else {
            // Path allowed
            next();
        }
    } else {
        next();
    }
};

export default router

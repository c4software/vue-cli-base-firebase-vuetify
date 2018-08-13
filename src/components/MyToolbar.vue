<template>
    <div>

        <v-navigation-drawer v-if="isLoggedIn" v-model="drawer" app dark>
            <v-toolbar class="primary" flat dark>
                <v-toolbar-title class="white--text">{{getUser.displayName}}</v-toolbar-title>
            </v-toolbar>
            <myContentDrawer/>
        </v-navigation-drawer>

        <v-toolbar class="primary" clipped-left app>

            <v-toolbar-side-icon v-if="isLoggedIn" dark @click.stop="drawer = !drawer"/>
            <v-toolbar-title class="white--text">{{this.$route.name?$t("drawer." + this.$route.name):''}}</v-toolbar-title>
            <v-spacer/>

            <disconnectAction v-if="isLoggedIn"/>

        </v-toolbar>

    </div>
</template>

<script>
    import myContentDrawer from './Drawer'
    import disconnectAction from './toolbar/disconnectAction'
    import {mapGetters} from 'vuex'


    export default {
        name: 'myToolbar',
        components: {myContentDrawer, disconnectAction},
        computed: {
            ...mapGetters(['isLoggedIn', 'getUser',])
        },
        data: function () {
            return {
                drawer: true,
            }
        },
        methods: {}
    }
</script>

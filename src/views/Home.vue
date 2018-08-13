<template>
    <v-slide-y-transition mode="out-in">
        <v-container fluid>
            <v-layout column align-center v-if="isLoggedIn">
                <h3 class="headline mb-0 mt-3">{{$t('welcome')}} {{getUser.displayName}}</h3>
            </v-layout>
        </v-container>
    </v-slide-y-transition>
</template>


<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'login',
        computed: mapGetters([
            'getUser',
            'isLoggedIn',
        ])
    }
</script>

<template>
    <v-slide-y-transition mode="out-in">
        <v-container fluid>

            <VuetifyLoader v-if="isLoading"/>

            <v-flex xs12 sm5 mx-auto>
                <v-card>
                    <v-card-title primary-title class="text-xs-center">
                        <div class="mx-auto pb-1 text-center">
                            <img src="../assets/logo.png">
                            <h3 class="headline mb-0 mt-3">{{$t('login.title')}}</h3>
                            <p class="mt-3 mb-0">{{$t('login.description')}}</p>
                        </div>
                    </v-card-title>
                    <v-card-actions class="pb-3">
                        <v-btn color="primary" @click.stop="doAuth" class="mx-auto">{{$t('google_connect')}}</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

        </v-container>
    </v-slide-y-transition>
</template>

<script>
    import {firebaseSignIn, isLoggedIn} from '../helpers/firebase'

    export default {
        name: 'login',
        data: () => {
            return {isLoading: true}
        },
        created: function () {
            if (isLoggedIn()) {
                this.$router.push('/')
            } else {
                this.isLoading = false
            }
        },
        methods: {
            doAuth: function () {
                this.isLoading = true;
                firebaseSignIn().then(loggedIn => {
                    if (loggedIn) {
                        this.$router.push('/');
                    }
                }).catch(error => {
                    console.log(error)
                }).finally(() => {
                    this.isLoading = false;
                })
            }
        }
    }
</script>

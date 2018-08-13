<template>
    <v-list dense>
        <template v-for="(item, i) in items">

            <v-divider dark v-if="item.divider" :key="i"></v-divider>

            <!--Item avec sous élément-->
            <v-list-group dark v-else-if="item.subItems" :key="i" v-model="item.active" :prepend-icon="item.icon" no-action :id="item.id">

                <v-list-tile slot="activator" ripple>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile ripple v-for="subItem in item.subItems" :key="subItem.text" :to="subItem.action">
                    <v-list-tile-content>
                        <v-list-tile-title>{{ subItem.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

            </v-list-group>

            <!--Item classique seul-->
            <v-list-tile ripple :to="item.action" :key="i" v-else>
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.text }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

        </template>
    </v-list>
</template>


<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'drawer',
        computed: {
            ...mapGetters(['isLoggedIn', 'isAdmin',]),
            items: function () {
                if (this.isLoggedIn) {
                    return [
                        {icon: 'home', text: this.$t('drawer.home'), action: '/'},
                    ];
                }
            }
        }
    }
</script>

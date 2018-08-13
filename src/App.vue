<template>
  <v-app>
    <myToolbar/>

    <v-content>
      <router-view/>
    </v-content>

  </v-app>
</template>

<script>
    import myToolbar from './components/MyToolbar'

    export default {
        name: 'App',
        components: {myToolbar},
        data() {
            return {}
        },
    }
</script>

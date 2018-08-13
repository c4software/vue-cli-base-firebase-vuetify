<template>
  <v-btn icon dark @click.stop="doLoginLogout">
    <v-icon>power_settings_new</v-icon>
  </v-btn>
</template>

<script>

  import {firebaseSignOut} from "../../helpers/firebase";

  export default {
    name: "disconnectAction",
    methods: {
      doLoginLogout: function () {
        this.$vuetifyConfirmDialog.open(this.$t("disconnectModal.title"), this.$t("disconnectModal.text"), this.$t("disconnectModal.cancelText"), this.$t("disconnectModal.confirmText")).then(state => {
          if (state) {
            firebaseSignOut().then(data => {
              this.$router.replace('/login')
            });
          }
        })
      }
    }
  }
</script>

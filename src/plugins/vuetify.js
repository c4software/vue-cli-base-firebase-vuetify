import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import loader from 'vuetify-vuejs-loader';
import confirmDialog from 'vuetify-vuejs-confirmdialog';
import messageDialog from 'vuetify-vuejs-messagedialog';
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify, {
    theme: {
        primary: colors.red.darken1,
        secondary: colors.red.accent4,
        accent: colors.red.accent4,
        error: colors.red.accent4,
        warning: colors.orange.darken2,
        info: colors.blue.base,
        success: colors.green.base
    },
    options: {
        themeVariations: ['primary', 'secondary']
    }
});


Vue.use(loader);
Vue.use(confirmDialog);
Vue.use(messageDialog);

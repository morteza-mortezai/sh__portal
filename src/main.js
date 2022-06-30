import Vue from "vue";
import App from "./App.vue";
import { store } from "./store";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import axios from "axios";
import VueAxios from "vue-axios";
import VuePersianDatetimePicker from "vue-persian-datetime-picker";
Vue.component("date-picker", VuePersianDatetimePicker);
// Vue.use(VuePersianDatetimePicker, {
//     name: 'custom-date-picker',
//     props: {
//       format: 'YYYY-MM-DD HH:mm',
//       displayFormat: 'jYYYY-jMM-jDD HH:mm',
//       editable: false,
//       inputClass: 'form-control my-custom-class-name',
//       placeholder: 'Please select a date',
//       altFormat: 'YYYY-MM-DD HH:mm',
//       color: '#00acc1',
//       autoSubmit: true,
//       //...
//       //... And whatever you want to set as default.
//       //...
//     }
//   });
Vue.config.productionTip = false;
// axios
Vue.use(VueAxios, axios);
// sweet alert config
const options = {
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
};
Vue.use(VueSweetalert2, options);

// main.js
//...

//...
new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

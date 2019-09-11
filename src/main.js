import Vue from 'vue'
import App from './App.vue'
// Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from "aos";
import "aos/dist/aos.css";
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  created(){
    AOS.init({ disable: "phone"})
  },
}).$mount('#app')

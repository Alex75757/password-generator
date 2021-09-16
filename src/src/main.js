import Vue from 'vue'
import App from './App.vue'
import Clipboard from 'v-clipboard';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
// import Vuex from 'vuex'


Vue.use(Clipboard);
Vue.use(Antd);
// Vue.use(Vuex);

Vue.config.productionTip = false

// const store = new Vuex.Store({
//   state: {
//     password: '',
//   },
//   mutations: {
//     changePass (state, payload) {
//       state.password = payload
//     }
//   }
// })

new Vue({
  data () {
   return {
    password:"",
    // store: store,
   }
  },
  
  render: h => h(App),
}).$mount('#app')


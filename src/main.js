// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import {store} from './store';

import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(firestorePlugin)

firebase.initializeApp({
  projectId: 'vtdl-a6ac8',
  databaseURL: 'https://vtdl-a6ac8.firebaseio.com'
})
export const db = firebase.firestore();

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //store,
  router,
  render: h => h(App),
});

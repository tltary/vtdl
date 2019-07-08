import Vue from 'vue'
import Vuex from 'vuex';
import { db } from '../main';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    items: null
  },
  getters: {
    getItems: state => {
      return state.items
    }
  },
  mutations: {
    setItems: state => {
      let items = []
      db.collection('todos').orderBy('createdAt', 'desc').onSnapshot((snapshot) => {
        items = []
        snapshot.forEach((doc) => {
          items.push({ id: doc.id, title: doc.data().title, createdAt: doc.data().createdAt, completed: doc.data().completed})
        })
        state.items = items
      })
    }
  },
  actions: {
    setItems: context => {
      context.commit('setItems')
    }
  }

});

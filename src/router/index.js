import Vue from 'vue'
import Router from 'vue-router'
import ToDo from '@/components/ToDo'
import ToDoSingle from '@/components/ToDoSingle'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/todo/:id',
      name: 'ToDoSingle',
      component: ToDoSingle
    },
    {
      path: '/',
      name: 'ToDo',
      component: ToDo
    },
  ]
})

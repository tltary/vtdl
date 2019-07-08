<template>
  <section class="todo">
    <div class="container">
      <input type="text" class="todo__input" placeholder="Введите задачу" v-model="newTodo" @keyup.enter="addTodo">
      <div class="todo__items">
        <div class="todo__item" v-for="(todo, idx) in paginatedData" :key="idx">
          <label class="checkbox">
            <input @click="completeTodo(todo.id, todo.completed)" :checked="{ completed : todo.completed }" type="checkbox" v-model="todo.completed">
            <span class="checkbox__content"></span>
          </label>
          <router-link class="todo__item__link" :class="{ completed : todo.completed }" :to="{ name: 'ToDoSingle', params: { id: todo.id }}">{{todo.title}}</router-link>
          <span class="remove" @click="removeTodo(todo.id)">
            &times;
          </span>
        </div>
      </div>
      <div class="todo__navigation__block">
        <button class="todo__navigation"
            :disabled="pageNumber === 0"
            @click="prevPage">
            Previous
        </button>
        <button class="todo__navigation"
            :disabled="pageNumber >= pageCount -1"
            @click="nextPage">
            Next
        </button>
      </div>
    </div>
  </section>
</template>

<script>
  import { db } from '../main';
  export default {
    data() {
      return {
        newTodo: '',
        todos: [],
        pageNumber: 0,
      }
    },
    computed: {
      pageCount(){
        let l = this.todos.length,
            s = this.size;
        return Math.ceil(l/s);
      },
      paginatedData(){
        const start = this.pageNumber * this.size,
              end = start + this.size;
        return this.todos.slice(start, end);
      },
    },
    created(){
      if (this.$route.query.page == 'undefined' || this.$route.query.page == null || this.$route.query.page == "") {
        this.$router.push(`?page=1`);
        this.pageNumber = 0;
        return
      }
      this.$router.push(`?page=${this.$route.query.page}`);
      this.pageNumber = this.$route.query.page - 1;
    },
    methods: {
      removeTodo(idx) {
        db.collection('todos').doc(idx).delete()
      },
      completeTodo(idx, status) {
        if (status == true) {
          db.collection('todos').doc(idx).update('completed',false)
        } else {
          db.collection('todos').doc(idx).update('completed',true)
        }
      },
      addTodo() {
        if (this.newTodo.trim().length == 0) {
          return
        }
        const createdAt = new Date()
        const title = this.newTodo
        const completed = false
        db.collection('todos').add({ title, completed, createdAt })
        this.newTodo = ''
        this.pageNumber = 0;
        this.$router.push(`?page=1`)
      },
      nextPage(){
        this.pageNumber++
        this.$router.push(`?page=${this.pageNumber + 1}`)
      },
      prevPage(){
        this.pageNumber--
        this.$router.push(`?page=${this.pageNumber + 1}`)
      },
    },
    firestore () {
      return {
        todos: db.collection('todos').orderBy('createdAt', 'desc')
      }
    },
    props:{
      size:{
        type: Number,
        required: false,
        default: 10
      }
    },
  }
</script>

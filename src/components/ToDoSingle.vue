<template>
  <section class="todo">
    <div class="container">
      <button class="todo__button todo__back" @click="backPage">&laquo; Назад</button>
      <textarea type="text" v-model="todo.title" class="todo__input todo__input--single"></textarea>
      <button class="todo__button todo__save" @click="updateTodo(todo.id)">Сохранить</button>
      <button v-if="!todo.completed" class="todo__button" @click="completeTodo(todo.id)">Не выполнено</button>
      <button v-else class="todo__button todo__save" @click="completeTodo(todo.id)">Выполнено</button>
      <button class="todo__button todo__delete" @click="removeTodo(todo.id)">Удалить</button>
    </div>
  </section>
</template>

<script>
  import { db } from '../main';
  export default {
    data() {
      return {
        singleTodo: '',
        todo: [],
      }
    },
    methods: {
      removeTodo(idx) {
        db.collection('todos').doc(idx).delete()
        alert('Запись удалена!')
        this.$router.go(-1);
      },
      backPage() {
        this.$router.go(-1);
      },
      updateTodo(idx) {
        alert('Запись сохранена!')
        db.collection('todos').doc(idx).update('title', this.todo.title, 'completed', false)
      },
      completeTodo(idx) {
        if (this.todo.completed == true) {
          db.collection('todos').doc(idx).update('completed',false)
        } else {
          db.collection('todos').doc(idx).update('completed',true)
        }
      },
    },
    firestore () {
       return {
          todo: db.collection('todos').doc(this.$route.params.id)
       }
     }

  }
</script>

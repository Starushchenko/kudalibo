<template>
  <div class="">
    <ul class="form">
      <li class="form__group" v-for="todo, index in todos" :key="todo.text">
        <input :id="index" :checked="todo.done" @change="toggle(todo)" type="checkbox">
        <label :for="index" :class="{ done: todo.done }">{{ todo.text }}</label>
      </li>
      <li><input @keyup.enter="addTodo" placeholder="What needs to be done?"></li>
    </ul>
  </div>
  
</template>

<script>
  import { mapMutations } from 'vuex'
  
  export default {
    computed: {
      todos () {
        return this.$store.state.todos.list
      },
      userData () {
        return this.$store.state.user.userData
      }
    },
    methods: {
      addTodo (e) {
        this.$store.commit('todos/add', e.target.value)
        e.target.value = ''
      },
      ...mapMutations({
        toggle: 'todos/toggle',
        toggleAuthorize: 'user/toggleAuthorize'
      })
    }
  }
</script>

<style>
  .done {
    text-decoration: line-through;
  }
</style>

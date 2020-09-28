<template>
  <div class="container main-container pt-5">
    <h3 class="text-center">ToDo App</h3>
    <TodoForm @addTodoEvent="addTodo($event)"/>
    <h3 class="text-center mt-5 mb-3">To do List</h3>
    <Todos
        @updateTodoEvent="showUpdateContainer($event)"
        @deleteTodoEvent="deleteTodo($event)"
        :todos="todos"
    />
<!--    <Alert v-else />-->
    <UpdateTodo
        :todo="todUpdateTodo"
        @updateTodoEvent="updateTodo($event)"
        @hiddenUpdateContainerEvent="showUpdate = false"
        :class="{'show-update-container' : showUpdate}"
    />
  </div>
</template>

<script>
import TodoForm from "~/components/todo/TodoForm";
import Todos from "~/components/todo/Todos";
import Alert from "~/components/todo/Alert";
import UpdateTodo from "~/components/todo/UpdateTodo";

export default {
  data() {
    return {
      showUpdate: false,
      todUpdateTodo: null
    }
  },
  components: {UpdateTodo, Alert, Todos, TodoForm},
  methods: {
    addTodo(todo) {
      this.$store.dispatch("addTodo", todo)
    },
    deleteTodo(todo) {
      this.$store.dispatch("deleteTodo", todo)
    },
    showUpdateContainer(todo) {
      this.showUpdate = true
      this.todUpdateTodo = todo
    },
    updateTodo(updateTodo) {
      this.showUpdate = false
      this.$store.dispatch("updateTodo", updateTodo)
    }
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos
    }
  }
}
</script>

<style>

</style>

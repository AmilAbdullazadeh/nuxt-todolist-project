<template>
  <div class="row">
    <Todo
        @updateTodoEvent="$emit('updateTodoEvent', $event)"
        @deleteTodoEvent="$emit('deleteTodoEvent', $event)"
        v-for=" todo in todos"
        :key="todo._id"
        :todo="todo"
    />
  </div>
</template>

<script>
import Todo from "~/components/todo/Todo";

export default {
  name: "Todos",
  components: {Todo},
  props: ["todos"]
}
</script>

<style scoped>

</style>
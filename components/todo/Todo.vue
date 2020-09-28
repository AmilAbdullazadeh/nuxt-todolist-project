<template>
  <div
      style="background-color: orange !important;"
      class="p-2 mb-3 text-light bg-dark col-md-8 offset-2 shadow card d-flex justify-content-center flex-row align-items-center"
  >
    <p class="m-0 w-100">{{ todo.text }}</p>
    <button @click="$emit('updateTodoEvent', todo)" class="btn btn-sm btn-warning flex-shrink-1 mr-1">
      Edit
    </button>
    <button @click="$emit('deleteTodoEvent', todo)" class="btn btn-sm btn-danger flex-shrink-1">X</button>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: [ "todo" ]
}
</script>

<style scoped>

</style>
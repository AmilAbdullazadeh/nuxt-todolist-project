<template>
  <div
      class="update-container container-fluid d-flex flex-column justify-content-center align-items-center"
  >
    <div style="width: 30rem" class="card shadow pt-2 pb-2">
      <div class="card-body">
        <h4 class="card-title">Edit</h4>
        <input v-model="loadedTodo.text" type="text" class="form-control mt-3 mb-3">
        <a @click.prevent="$emit('hiddenUpdateContainerEvent', true)" class="card-link btn btn-outline-danger"
           href="">Cancel</a>
        <a @click.prevent="$emit('updateTodoEvent', loadedTodo)" class="card-link btn btn-outline-warning"
           href="">Update</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpdateTodo",
  props: ["todo"],
  computed: {
    loadedTodo() {
      return this.todo ? {...this.todo} : {_id: null, text: ""}
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="row">
    <div class="col-md-6 offset-3 mt-5 d-flex">
      <input v-model="todoText" :class="{'is-invalid' : isInvalid}" ref="todoTextInput" type="text"
             class="form-control form-control-lg mr-1"/>
      <button @click="addTodo" class="btn btn-outline-danger">Create</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      todoText: "",
      isInvalid: false
    }
  },
  methods: {
    addTodo() {
      if (this.todoText !== "") {
        this.$emit("addTodoEvent", this.todoText)
        this.todoText = ""
        this.$nextTick(() => this.$refs.todoTextInput.focus())
        this.isInvalid = false
      } else {
        this.isInvalid = true
      }
    }
  }
}
</script>

<style scoped>

</style>
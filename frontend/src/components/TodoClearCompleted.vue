<template>
  <div>
    <button class="clearButton" v-if="showClearCompletedButton" @click="clearCompleted">
      Clear Completed
    </button>
  </div>
</template>

<script>
export default {
  name: "todo-clear-completed",
  computed: {
    showClearCompletedButton() {
      return this.$store.getters.showClearCompletedButton
    },
  },
  methods: {
    clearCompleted() {
      this.$store.dispatch('clearCompleted')
    },
  },
};
</script>

<style>

.clearButton {
  width: 140px;
}

</style>


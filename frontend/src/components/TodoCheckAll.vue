<template>
  <div>
    <label
      ><input type="checkbox" :checked="anyRemaining" @change="allChecked" />
      Marcar tudo</label
    >
  </div>
</template>

<script>
export default {
  name: "todo-check-all",
  computed: {
    anyRemaining() {
      this.$store.getters.anyRemaining
    },
  },
  methods: {
    allChecked() {
      this.$store.dispatch('checkAll', event.target.checked)
    },
  },
};
</script>

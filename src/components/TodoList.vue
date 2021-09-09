<template>
  <div>
    <input
      type="text"
      class="todo-input"
      placeholder="What needs to be done?"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
    <transition-group
      name="fade"
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutDown"
    >
      <todo-item
        v-for="todo in todosFiltered"
        :key="todo.id"
        :todo="todo"
        :checkAll="!anyRemaining"
      >
      </todo-item>
    </transition-group>

    <div class="extra-container">
      <todo-check-all :anyRemaining="anyRemaining"></todo-check-all>
      <todo-items-remaining :remaining="remaining"></todo-items-remaining>
    </div>

    <div class="extra-container">
      <todo-filtered :anyRemaining="anyRemaining"></todo-filtered>
      <div>
        <transition name="fade">
          <todo-clear-completed
            :showClearCompletedButton="showClearCompletedButton"
          ></todo-clear-completed>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import TodoItemsRemaining from "./TodoItemsRemaining.vue";
import TodoCheckAll from "./TodoCheckAll.vue";
import TodoFiltered from "./TodoFiltered.vue";
import TodoClearCompleted from "./TodoClearCompleted.vue";

export default {
  name: "todo-list",
  components: {
    TodoItem,
    TodoItemsRemaining,
    TodoCheckAll,
    TodoFiltered,
    TodoClearCompleted,
  },
  data() {
    return {
      newTodo: "",
      idForTodo: 3,
      filter: "all",
      todos: [
        {
          id: 1,
          title: "Caminhar 10km",
          completed: false,
          editing: false,
        },
        {
          id: 2,
          title: "Estudar vue",
          completed: false,
          editing: false,
        },
      ],
    };
  },
  created() {
    eventBus.$on("removedTodo", (id) => this.removeTodo(id));
    eventBus.$on("finishedEdit", (data) => this.finishedEdit(data));
    eventBus.$on("checkAllChanged", (checked) => this.checkAllTodos(checked));
    eventBus.$on("filterChanged", (filter) => (this.filter = filter));
    eventBus.$on("clearCompletedTodos", () => this.clearCompleted());
  },
  beforeDestroy() {
    eventBus.$off("removedTodo", (id) => this.removeTodo(id));
    eventBus.$off("finishedEdit", (data) => this.finishedEdit(data));
    eventBus.$off("checkAllChanged", (checked) => this.checkAllTodos(checked));
    eventBus.$off("filterChanged", (filter) => (this.filter = filter));
    eventBus.$off("clearCompletedTodos", () => this.clearCompleted());
  },

  computed: {
    remaining() {
      return this.todos.filter((todo) => !todo.completed).length;
    },
    anyRemaining() {
      return this.remaining != 0;
    },
    todosFiltered() {
      if (this.filter == "all") {
        return this.todos;
      } else if (this.filter == "active") {
        return this.todos.filter((todo) => !todo.completed);
      } else if (this.filter == "completed") {
        return this.todos.filter((todo) => todo.completed);
      }
      return this.todos;
    },
    showClearCompletedButton() {
      return this.todos.filter((todo) => todo.completed).length > 0;
    },
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length == 0) {
        return;
      }
      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false,
      });
      this.newTodo = "";
      this.idForTodo++;
    },
    removeTodo(id) {
      const index = this.todos.findIndex((item) => item.id == id);
      this.todos.splice(index, 1);
    },
    checkAllTodos() {
      this.todos.forEach((todo) => (todo.completed = event.target.checked));
    },
    clearCompleted() {
      this.todos = this.todos.filter((todo) => !todo.completed);
    },
    finishedEdit(data) {
      const index = this.todos.findIndex((item) => item.id == data.id);
      this.todos.splice(index, 1, data);
    },
  },
};
</script>


<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");

.todo-input {
  widows: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 1rem;
}

.todo-input:focus {
  outline: 0;
}

.todo-item {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation-duration: 0.3s;
}

.remove-item {
  cursor: pointer;
  margin-left: 14px;
}

.remove-item:hover {
  color: black;
}

.todo-item-left {
  display: flex;
  align-items: center;
}

.todo-item-label {
  padding: 10px;
  border: 1px solid white;
}

.todo-item-edit {
  font-size: 24px;
  color: #2c3e50;
  margin-left: 12px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
}

.todo-item-edit:focus {
  outline: none;
}

.completed {
  text-decoration: line-through;
  color: gray;
}

.extra-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  border-top: 1px solid lightgray;
  padding-top: 14px;
  margin-bottom: 14px;
}

button {
  font-size: 14px;
  background-color: white;
  appearance: none;
  border: 1px solid rgb(199, 199, 199);
  width: 90px;
  height: 28px;
  border-radius: 8px;
  transition: 0.1s;
}

button:hover {
  border: 2px solid rgb(103, 212, 103);
}

button:focus {
  outline: none;
}

.active {
  background: rgb(103, 212, 103);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

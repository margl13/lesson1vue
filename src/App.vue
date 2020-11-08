 <template>
  <div id="app">
    <h1>Vue.js Todo App</h1>
    <div>
      <div>
        <todo-list v-bind:todos="todos"></todo-list>
        <add-todo v-on:add-todo="addNewTodo"></add-todo>
      </div>
    </div>
  </div>
</template>

<script>

import TodoList from "./components/Todos/TodoList";
import AddTodo from "./components/Todos/AddTodo";

export default {
  name: 'App',
  components: {
    TodoList,
    AddTodo
  },

  data() {
    return {
      todos: [
        { id: 1, text: 'Wake up' },
        { id: 2, text: 'Take a shower' },
        { id: 3, text: 'Make a latte' },
        { id: 4, text: 'Dress up' }
      ],
    };
  },
  methods: {
    addNewTodo(newTodo) {
      this.todos.push(newTodo);
    },
  },
};
</script>

<style>

</style>

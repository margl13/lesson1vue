 <template>
  <div id="app">
    <div>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>



import {Api} from "./components/api";

export default {
  name: 'App',
  components: {},

  data() {
    return {
      todo: {
        text: ''
      },
      todos: [],
    };
  },
  
  methods: {
    async addNewTodo() {
      await Api.Todos.createTodo(this.todo)
    },

    async getTodos() {
      const todos = await Api.Todos.getAllTodos();
      console.log(todos);
      const arr = [];
      Object.entries(todos.body).forEach(([key, value]) => arr.push({...value, id: key}));
      this.todos = arr;
    },

    async removeTodo(id) {
      await Api.Todos.deleteTodo(id)
    },

    async editTodo(id, todo) {
      await Api.Todos.updateTodo(id, todo)
    }
  },

  async beforeMount() {
    await this.getTodos()
  }

};
</script>

<style>

</style>

<template>
    <div>
        <h1>
            All my todos
        </h1>
        <ul>
            <li
             v-for="todo in todos"
             :key="todo.id"
            >
              {{todo.text}}
            </li>
        </ul>
        <router-link tag="button" to="/">back</router-link>
    </div>
</template>
<script>
    import {Api} from "../api";
    export default {
        name: 'Todolist',
        components: {},

        data () {
            return {
                todo: {
                    text: ''
                },
                todos: [],
            };
        },

        methods: {
            async getTodos() {
                const todos = await Api.Todos.getAllTodos();
                console.log(todos);
                const arr = [];
                Object.entries(todos.body).forEach(([key, value]) => arr.push({...value, id: key}));
                this.todos = arr;
            },

            async removeTodo(id) {
                await Api.Todos.deleteTodo(id)
            }
        },

        async beforeMount() {
            await this.getTodos()
        }
    }
</script>

<style scoped>
   p {
       text-align: center;
   }
</style>

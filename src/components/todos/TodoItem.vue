<template>
    <div>
        <div>
            <ul>
                <li
                        v-for="todo in todos"
                        :key="todo.id"
                >
                    {{todo.id}} - {{todo.text}}
                    <button @click="removeTodo(todo.id)">Remove</button>
                </li>
            </ul>
            <router-link tag="button" to="/">back</router-link>
        </div>
    </div>
</template>

<script>
    import {Api} from "../api";

    export default {
        name: 'Todoitem',
        data() {
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
    };
</script>

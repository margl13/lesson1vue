<template>
    <div>
        <input
                type="text"
                v-model="todo.text"
                @keyup.enter="addNewTodo"
                placeholder="Add todo"
        >
        <button @click="addNewTodo">Add</button>
        <hr>
        <router-link tag="button" to="/">back</router-link>
    </div>
</template>

<script>
    import {Api} from "../api";

    export default {
        name: "AddTodo",
        data() {
            return {
                todo: {
                    text: ''
                },
                todos: [],
            }
        },
        methods: {
            async addNewTodo() {
                await Api.Todos.createTodo(this.todo)
            }
        },
    };

</script>

<style scoped>

</style>

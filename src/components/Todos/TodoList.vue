<template>
    <div>
        <p>
            {{todos}}
        </p>
        <todo-item
                @delete-todo="deleteTodo"
                v-for="todo in todos"
                :key="todo.id"
                :todo.sync="todo"
        >
        </todo-item>
    </div>
</template>
<script>
    import TodoItem from "./TodoItem";
    export default {
        props: ['todos'],
        components: {
            TodoItem
        },
        methods: {
            deleteTodo(i) {
                this.todos.splice(i, 1);
                this.count--;
            }
        }
    }
</script>

<style scoped>
   p {
       text-align: center;
   }
</style>

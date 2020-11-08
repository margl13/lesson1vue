<template>
    <div>
        <div>
            {{todo.id}} - {{todo.text}}
            <button @click="deleteTodo(todo)">Remove</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['todo'],
        data() {
            return {};
        },
        methods: {
            deleteTodo(todo) {
                this.$emit('delete-todo', todo)
            },
        },
    };
</script>

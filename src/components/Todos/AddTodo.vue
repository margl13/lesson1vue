<template>
    <div>
        <input
                v-model="newTodoText"
                @keyup.enter="addNewTodo"
                placeholder="Add todo"
        >
        <button @click="addNewTodo">Add</button>
    </div>
</template>

<script>
    export default {
        name: "AddTodo",
        data() {
            return {
                newTodoText: '',
                nextTodoId: 5
            }
        },
        methods: {
            addNewTodo() {
                    const id = this.nextTodoId++;
                    const text = this.newTodoText;
                    this.$emit('add-todo', {
                        id,
                        text
                        });
                this.newTodoText = '';
            }

        },
    };

</script>

<style scoped>

</style>

<template>
    <div class="header">
        <h1>Vue.js Todo App</h1>
        <ul class="nav">
            <li class="nav-item">
                <router-link class="nav-link" to="/todolist">Todo list</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/todoitem">Todo item</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="addtodo">Add new todo</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>

</style>

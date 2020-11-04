<template>
   <div id="todo-list">
      <input
         v-model="newTodoText"
         v-on:keyup.enter="addNewTodo"
         placeholder="Add todo"
      >
      <button @click="addNewTodo">Add</button>
      <ul>
         <li
                 is="todo-item"
                 v-for="(todo, i) in todos"
                 v-bind:key="todo.id"
                 v-bind:title="todo.text"
                 v-on:remove="todos.splice(i, 1)"
         >
            {{ todo.text }}
         <button @click="deleteItem(i)">Remove</button>
         </li>
      </ul>
   </div>
</template>

<script>
export default {
  name: 'HelloWorld',

   data() {
     return{
        newTodoText: '',
        todos: [
           { id: 1, text: 'Wake up' },
           { id: 2, text: 'Take a shower' },
           { id: 3, text: 'Make a latte' },
           { id: 4, text: 'Dress up' }
        ],
        nextTodoId: 5
     }
   },

   methods: {
     addNewTodo: function () {
      this.todos.push({
         id: this.nextTodoId++,
         text: this.newTodoText
      })
        this.newTodoText = ''
     },
      deleteItem(i) {
        this.todos.splice(i, 1);
        this.count--;
      }
     }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

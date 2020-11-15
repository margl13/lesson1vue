import Vue from 'vue';

export const Todos = {
    createTodo: (todo) => Vue.http.post(`todos.json`, todo),
    getAllTodos: () => Vue.http.get(`todos.json`),
    deleteTodo: (id) => Vue.http.delete(`todos/${id}.json`),
    updateTodo: (id, todo) => Vue.http.put(`todos/${id}.json`, todo)

}

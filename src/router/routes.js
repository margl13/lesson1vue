import Header from "../components/todos/Header";
import TodoList from "../components/todos/TodoList";
import TodoItem from "../components/todos/TodoItem";
import AddTodo from "../components/todos/AddTodo";


export const routes = [
    {
        path: '',
        component: Header
    },
    {
        path: '/todolist',
        component: TodoList
    },
    {
        path: '/todoitem',
        component: TodoItem
    },
    {
        path: '/addtodo',
        component: AddTodo
    }
]

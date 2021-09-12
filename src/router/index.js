import Vue from 'vue'
import Router from 'vue-router'

import TodoList from '../views/TodoList'

Vue.use(Router)

const routes = [
    {
        name: 'todoList',
        path: '/',
        component: TodoList,
    },
]

const router = new Router({ routes })

export default router
import Vue from "vue";
import Router from "vue-router";

import TodoList from "../components/TodoList";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import Logout from "../components/auth/Logout";

Vue.use(Router);

const routes = [
  {
    name: "todoList",
    path: "/todos",
    component: TodoList,
    requiresAuth: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: "login",
    path: "/login",
    component: Login,
    meta: {
      requiresVisitor: true
    }
  },
  {
    name: "register",
    path: "/register",
    component: Register,
    meta: {
      requiresVisitor: true
    }
  },
  {
    name: "logout",
    path: "/logout",
    component: Logout
  }
];

const router = new Router({ routes });

export default router;

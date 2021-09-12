<template>
  <div id="app" class="container">
    <header class="topBar">
      <section class="toBarSec">
        <router-link to="/" class="todoListBtn">TodoList </router-link>
         <router-link to="/foodlist" class="foodListBtn">FoodList </router-link>

      </section>
    </header>
    <router-view />
  </div>
</template>

<style>
.topBar {
  box-shadow: 0px 1px 0px black;
  margin: 4px;
}

.todoListBtn {
  text-decoration: none;
  color: black;
}

.foodListBtn {
  text-decoration: none;
  color: black;
  margin-left: 16px;
}
</style>


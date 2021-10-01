<template>
  <div class="mainLogin">
    <div class="welcomeLogin">
      <strong>Welcome to TodoList</strong>
      <p>Login</p>

      <form action="#" @submit.prevent="login">
        <div class="inputEmail">
          <input
            type="email"
            class="formControl"
            id="email"
            placeholder="Email"
            v-model="username"
          />
        </div>
        <div class="inputPassword">
          <input
            type="password"
            class="formControl"
            id="exampleInputPassword1"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <button type="submit" class="loginBtn">Login</button>
      </form>
      <div class="registerLogin">
        Don't have an account? register now
        <router-link :to="{ name: 'register' }">Register</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("retrieveToken", {
          username: this.username,
          password: this.password
        })
        .then(response => {
          this.$router.push("/todos");
        });
    }
  }
};
</script>

<style>
.mainLogin {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.welcomeLogin {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: rgb(0, 0, 0);
}

.welcomeLogin strong {
  font-size: 46px;
  margin-bottom: 1rem;
}

.welcomeLogin p {
  font-size: 20px;
}

.welcomeLogin form {
  width: 100%;
}

.inputEmail,
.inputPassword {
  margin-bottom: 1rem;
  width: 100%;
}

.inputEmail input,
.inputPassword input {
  border: none;
}

.welcomeLogin input {
  width: 100%;
  height: 30px;
}

::placeholder {
  padding: 8px;
}

.loginBtn {
  margin-top: 1rem;
  border: none;
  background-color: rgb(0, 0, 0);
  height: 40px;
  width: 100%;
  opacity: 0.8;
  cursor: pointer;
  transition: 0.2s;
  color: #fff;
  font-weight: 700;
}

.loginBtn:hover {
  opacity: 1;
}

.registerLogin {
  margin-top: 1rem;
  font-size: 14px;
  text-decoration: none;
  color: #000000;
  padding: 0 25px;
  font-size: 14px;
  letter-spacing: 0.1rem;
}

.registerLogin a {
  text-decoration: none;
  color: #3b3b3b;
  opacity: 0.6;
  transition: 0.2s;
}

.registerLogin a:hover {
  opacity: 1;
}
</style>

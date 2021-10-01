<template>
  <div class="mainRegister">
    <div class="welcomeRegister">
      <strong>Welcome to TodoList</strong>
      <p>Register</p>
      <form action="#" @submit.prevent="register">
        <div class="inputName">
          <input
            type="name"
            class="formControl"
            id="name"
            placeholder="Name"
            v-model="name"
          />
        </div>
        <div class="inputEmail">
          <input
            type="email"
            class="formControl"
            id="email"
            placeholder="Email"
            v-model="email"
          />
        </div>
        <div class="inputPassword">
          <input
            type="password"
            class="formControl"
            id="password"
            placeholder="Password    (The password must be at least 6 characters.)"
            v-model="password"
          />
        </div>
        <button type="submit" class="RegisterBtn">
          Create Account
        </button>
        <div class="registerLogin">
          Already have an account?
          <router-link :to="{ name: 'login' }">Login</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",

  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("register", {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(response => {
          this.$router.push("/login");
        });
    }
  }
};
</script>

<style>
.mainRegister {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.welcomeRegister {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: rgb(0, 0, 0);
}

.welcomeRegister p {
  font-size: 20px;
}

.welcomeRegister form {
  width: 100%;
}

.welcomeRegister strong {
  font-size: 46px;
  margin-bottom: 1rem;
}

.inputEmail,
.inputName,
.inputPassword {
  margin-bottom: 1rem;
  width: 100%;
}

.inputEmail input,
.inputPassword input,
.inputName input {
  border: none;
}

.welcomeRegister input {
  width: 100%;
  height: 30px;
}

::placeholder {
  padding: 8px;
}

.RegisterBtn {
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

.RegisterBtn:hover {
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

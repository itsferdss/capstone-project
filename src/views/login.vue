<script setup>

</script>

<template>
<div class="container">
    <div class="logo">
      <img src="/source/logo.png">  
    </div>

    <div id="login">
      <h1 class="title">Login</h1>
      <p class="subtitle">Sign in to continue</p>
      <div class="input-group">
        <label class="inputTitle" for="username">Name</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="input-group">
        <label class="inputTitle" for="password">Password</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button @click="login">Log in</button>
      <p>{{ errorMessage }}</p>
    </div>

    <div class="trapezoid"></div>
</div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
        login() {
            // Simulated login logic
            if (this.username === 'ferdinand' && this.password === '123') {
                // Redirect to home.html on successful login
                window.location.href = '/home';
            } else {
                this.errorMessage = 'Invalid username or password';
            }
        }
    }
};

</script>

<style scoped>
.container {
  margin-top: 170px;
  display: flex;
  justify-content: space-between; /* Align children with space between them */
  align-items: center;
  padding: 0 200px; /* Add padding to the container */
}

#login {
    text-align: center;
    margin-left: 500px;
}

.input-group {
    margin-bottom: 20px; 
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
    width: 250px;
    height: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #dae7ff;
}

button {
    background-color: #6bbeea;
    color: #1C2120;
    border: none;
    padding: 5px 70px;
    border-radius: 5px;
    cursor: pointer;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    font-size: 20px;
}

button:hover {
    background-color: #2aaac5;
}


.subtitle{
    color: #8F8E8E;
    margin: 0;
    font-size: 15px;
}

.logo{
    flex: 0 0 auto; 
}

.inputTitle{
    color: #8F8E8E;
    text-align: left;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.title{
    font-weight: bold;
    margin: 0;
    font-size: 40px;
    color: black;
}

.trapezoid {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #dae7ff;
    align-items: center;
}
</style>

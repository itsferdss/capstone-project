<script setup>

</script>
<template>
<div class="container">
    <div class="logo">
      <img src="/source/logo.png">
    </div>

    <div id="register">
      <h1 class="title">Create new Account</h1>
      <p class="subtitle">Create your Account</p>
      <div class="input-group">
        <label class="inputTitle" for="username">Name</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="input-group">
        <label class="inputTitle" for="email">Email</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="input-group">
        <label class="inputTitle" for="password">Password</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="input-group">
        <label class="inputTitle" for="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" v-model="confirmPassword" required>
      </div>
      <button @click="register">Register</button>
      <p>{{ errorMessage }}</p>
      <p>Already have an Account? <router-link to="/">Login Here</router-link></p>
    </div>

    <div class="trapezoid"></div>
  </div>
</template>

<script>
export default {
    data() {
      return{
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        errorMessage: ''
      };
    },
    methods: {
        register() {
            // Validate passwords match
            if (this.password !== this.confirmPassword) {
                this.errorMessage = 'Passwords do not match';
                return;
            }
            // Simulated registration logic
            // Replace with actual registration logic
            console.log('Registration successful!');
            // Redirect to login page after registration
            window.location.href = '/';
        }
    }
};
</script>

<style scoped>
.container {
  margin-top: 90px;
  display: flex;
  justify-content: space-between; /* Align children with space between them */
  align-items: center;
  padding: 0 0px; /* Add padding to the container */
}

#register {
    text-align: center;
    margin-top: 5px;
    flex: 1;
    margin-right: 80px;
}

.input-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
input[type="password"],
input[type="email"] {
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
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    font-size: 20px;
}

button:hover {
    background-color: #2aaac5;
}


.subtitle {
    color: #8F8E8E;
    margin: 0;
    font-size: 15px;
}

.logo {
    align-items: left ;
    flex: 1 0 auto;
    margin-right: 325px;
}

.inputTitle {
    color: #8F8E8E;
    text-align: left;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-left: 70px;
}

.title {
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
    /* Adjust the height of the trapezoid */
    background-color: #dae7ff;
}
</style>

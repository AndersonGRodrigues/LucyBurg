
<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button @click="handleClick">
        <router-link to="/mesa">login</router-link>
      </button>
    </form>
  </div>
</template>

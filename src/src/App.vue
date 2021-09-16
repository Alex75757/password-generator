<template>
  <div id="app">
    <img class="img" alt="Vue logo" src="./assets/logo.png">
    <Password msg="English password generator" />
    
  </div>
</template>

<script>
import Password from './components/Password';

export default {
  name: 'App',
  components: {
    Password,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #8d0cf7;
  margin-top: 10px;
  
}
.img{
  height: 20vh;
  transition: transform 1s ease-in-out 0.5s;
}
.img:hover{
   transform: rotate(-180deg);
}
</style>

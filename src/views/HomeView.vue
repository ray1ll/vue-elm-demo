<template>
  <div class="home">
    
    <login msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import home from '@/page/home/home.vue'
import login from '@/page/login/login.vue'
export default {
  name: 'HomeView',
  components: {
    login
  }
}
</script>

  <template>
    <nav>
      <router-link to="/">Home</router-link> <br>
      <router-link to="/mesa">Sobre</router-link>
    </nav>
    
    <router-view></router-view>
    
  </template>


<script>

export default {
  name: 'App',
};
</script>



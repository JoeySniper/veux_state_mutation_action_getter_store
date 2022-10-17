<template>
  <div>
    <router-link to="/display"><button class="btn btn-info">display</button></router-link>
    <router-link to="/about"><button class="btn btn-success">about</button></router-link>
    <router-view></router-view>
  </div>
</template>

<script>

// import Display from "./views/display.vue";

export default {
  name: 'Vuex2App',

  // components:{
  //   Display
  // },

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>
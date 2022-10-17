<template>
  <div>
    <h1>Display</h1>
    <food />
    <sport />
  </div>
</template>

<script>

import food from "./food.vue";
import sport from "./sport.vue";
export default {
    name: 'Vuex2Display',
     components:{
    food, sport
  },

    data() {
        return {
            
        };
    },

    computed: {
      
    },

    methods: {
        
    },
};
</script>

<style>
   
</style>
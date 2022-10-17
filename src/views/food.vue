<template>
    <div>
        <!-- <h1>Food = {{counter}}</h1> -->
        <h1>Food = {{$store.state.food}}</h1>
        <input type="text" value="" @input="inputfood">
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: 'Vuex2Food',

    data() {
        return {
            
        };
    },

    computed: {
        
    },

    methods: {
        inputfood(event){
            console.log(event.target.value)
            this.changeFood_state(event.target.value)
        },
        ...mapActions(['changeFood_state']),
    },
};
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
        <h1>About</h1>
        <h4>by Store = {{$store.getters.food}}</h4>
        <h4>by computed = {{sport}}</h4>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: 'Vuex2About',

    data() {
        return {
            
        };
    },

    computed: {
        ...mapGetters(['sport'])
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>
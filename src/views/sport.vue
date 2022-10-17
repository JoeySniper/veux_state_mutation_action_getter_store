<template>
    <div>
        <h1>Sport = {{$store.state.sport}}</h1>
        <input type="text" value="" @input="inputSport">
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: 'Vuex2Sport',

    data() {
        return {
            
        };
    },

    computed: {
       
    },

    methods: {
        ...mapActions(['changeSport_state']),

        inputSport(event){
            this.changeSport_state(event.target.value)
        }
    },
};
</script>

<style lang="scss" scoped>

</style>
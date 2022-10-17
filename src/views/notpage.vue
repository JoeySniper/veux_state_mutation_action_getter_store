<template>
    <div>
        <h1>{{$store.state.notfound_page}}</h1>
        <router-link to="/display">{{back_main_page}}</router-link>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: 'Vuex2Notpage',

    data() {
        return {
            
        };
    },

    computed: {
        ...mapState(['back_main_page']),
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>
<template>
    <div class="contact">
        <button v-on:click="getData">get user</button>
        <div class="data-view">
            {{users}}
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'contact',
    data() {
        return {
            users: []
        }
    },
    methods: {
        getData: function() {
            let vm = this;
            // let dataView = document.querySelector('.data-view');
            axios.get('https://jsonplaceholder.typicode.com/users/')
                .then(function(response) {
                    // console.log(response.data)
                    vm.users = response.data;
                })
                .catch(function(error) {
                    console.log(error)
                })
        }
    }
}
</script>

<style scoped>
.contact {
    min-height:700px;
}
.data-view {
    border:1px solid #ddd; 
    width:300px;
    margin: 0 auto;
    padding:20px;
    box-sizing:border-box;
    margin-top:20px;
}
</style>
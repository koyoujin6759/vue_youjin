<template>
    <div class="about">
        {{msg}}<br/>
        <strong>{{num}}</strong><br/>
        <button v-on:click="numIncrease()">increase</button>
    </div>
</template>

<script>
export default {
    name: 'menu1',
    data() {
        return {
            msg : 'this is about page',
            num:10
        }
    },
    methods: {        
        numIncrease : function() {
            let st = document.querySelector("strong");
            var numm = this.num += 1
            st.innerHTML = numm
        }
    },
}
</script>

<style scoped>
.about {
    min-height:700px;
}
</style>
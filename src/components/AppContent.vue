<template>
    <div>
        <main>
            <p>{{msg}}</p>
            <span>{{propsMsg}}</span><br/><br/>
            <button v-on:click="clickEvt">click me!!</button><br/><br/>
            <input type="text" /><button v-on:click="textResult">submit</button>
            <b></b><br/><br/>
        </main>
    </div>    
</template>

<script>
export default {
    name: 'AppContent',
    data() {
        return {
            msg : 'this is youjin world!! :-D',
            propsMsg : 'nice to meet you'
        }
    },
    methods: {
        clickEvt: function() {
            alert("hi")
        },
        textResult: function() {
            let nameVal = document.querySelector('input').value;
            let nameRst = document.querySelector('b');
            nameRst.innerHTML = nameVal + '님 환영합니다'
        },
        passNum: function() {
            this.$emit('pass',10)
        }
    }
}
</script>

<style scoped lang="scss">
main {
    min-height:700px;
}

</style>
<template>
    <div>
        <header>
            <ul class="gnb">
                <li><router-link to="/">home</router-link></li>
                <li><router-link to="/menu1">menu1</router-link></li>
                <li><router-link to="/menu2">menu2</router-link></li>
                <li><router-link to="/menu3">menu3</router-link></li>
            </ul>
        </header>
    </div>    
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style scoped>
header {
    border-bottom:1px solid #ddd;
    padding:0 20px;
    height:80px;
    line-height:80px;
}
ul,
li {
    padding:0;
    margin:0; 
    list-style: none;
}
.gnb li {
    display: inline-block;
    padding:0 30px;
}
</style>
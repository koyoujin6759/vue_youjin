<template>
    <div>
        <header>
            <!-- <ul class="gnb">
                <li><router-link to="/">home</router-link></li>
                <li><router-link to="/menu1">menu1</router-link></li>
                <li><router-link to="/menu2">menu2</router-link></li>
                <li><router-link to="/menu3">menu3</router-link></li>
            </ul> -->
            <HeaderNav></HeaderNav>
        </header>
    </div>    
</template>

<script>
import HeaderNav from '@/components/AppHeaderNav.vue'

export default {
    name: 'AppHeader',
    components: {
        HeaderNav
    }
}
</script>

<style lang="scss">
// @import "../assets/scss/_variable.scss";

</style>
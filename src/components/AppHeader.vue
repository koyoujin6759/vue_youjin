<template>
    <div>
        <header>
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
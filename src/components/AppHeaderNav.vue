<template>
    <div>
        <div class="header_top">
            <ul>
                <li v-for="(topMenu,idx) in topMenu" v-bind:key="idx">
                    <router-link :to="topMenu.url" >{{topMenu.name}}</router-link>
                </li>
            </ul>
        </div>
        <nav id="nav">
            <ul class="gnb">
                <li v-for="(menu,idx) in menus" v-bind:key="idx"> 
                    <router-link :to="menu.url" v-if="!menu.children">{{menu.name}}</router-link>
                    <div class="depth2"
                        v-else
                        v-on:mouseover="mouseover"
                        v-on:mouseleave="mouseleave"
                    >
                        {{menu.name}}
                        <ul class="dropdown" :class="{ 'isOpen': isOpen }">
                            <li v-for="(child,idx) in menu.children" v-bind:key="idx">
                                <router-link :to="child.url">{{child.name}}</router-link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>        
    </div>
</template>

<script>
export default {
    name: 'AppHeaderNav',

    data() {
        return {
            isOpen:false,
            topMenu: [
                {
                    url:'/login',
                    name: 'Login'
                },
                {
                    url:'/join',
                    name: 'Join'
                }
            ],
            menus: [
                {
                    url:'/',
                    name:'Home'
                },
                {
                    url:'/menu1',
                    name:'Menu1'
                },
                {
                    url:'/menu2',
                    name:'Menu2',
                    children: [
                        {
                            url:'/menu2-1',
                            name:'Menu2-1'
                        }
                    ]
                },
                {
                    url:'/menu3',
                    name:'Menu3'
                },
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        mouseover: function() {
            this.isOpen = true;
        },
        mouseleave: function() {
            this.isOpen = false;
        }
    },
};
</script>

<style lang="scss" scoped>
// @import "../assets/scss/_variable.scss";

header {
    border-bottom:1px solid #ddd;
    padding:0 20px;
    height:80px;
    line-height:80px;

    .header_top {
        width:100%;
        text-align:right;

        ul {
            li {
                display:inline-block; 
                padding-left:20px;
                line-height:30px;
            }
        }
    }

    .gnb {
        background:#eee;

        & > li {
            display: inline-block;
            vertical-align: top;
            padding:0 30px;
            position:relative;
            height:70px;
            line-height:70px;
            min-width:200px;
            box-sizing:border-box;

            > a,div {
                font-size:$primary-font-size;
                color:$primary-color;
                line-height:70px;
            }

            .depth2 {
                position: relative;
                display: block;
                height: auto;
                text-decoration: none;
                cursor: pointer;

                .dropdown {
                    display:none;
                    position:absolute;
                    left:0;
                    top:70px;
                    width:100%;
                    background:rgba(0,0,0,.3)
                }
            }            
        }
    }
}

.isOpen {
    display:block !important;
}
</style>
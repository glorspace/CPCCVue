<template>
    <div id="app" v-cloak>
        <v-app>
            <v-navigation-drawer app dark v-model="drawer">
                <img class="logo" src="http://www.centerpointesc.com/images/CPCClogo-blue-white.png">
                <v-list>
                    <template v-for="item in menuItems">
                        <v-list-tile :to="item.page" :key="item.page">
                            <v-list-tile-action>
                                <v-icon>{{item.icon}}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>{{item.label}}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </template>
                </v-list>
            </v-navigation-drawer>
            <v-toolbar color="blue" dark app>
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-spacer></v-spacer>
                <v-btn icon href="http://www.facebook.com/centerpointesc" target="_blank">
                    <v-icon size="20px">fab fa-facebook</v-icon>
                </v-btn>                
            </v-toolbar>
            <v-content>
                <router-view></router-view>
            </v-content>
            <v-footer dark app class="hidden-lg-and-up">
                <v-layout row justify-center>
                    <div>
                        Download our mobile app!
                        <v-btn class="ml-4" icon href="https://itunes.apple.com/us/app/my-church-app/id880244157?mt=8" target="_blank">
                            <v-icon size="20px">fab fa-app-store</v-icon>                        
                        </v-btn>
                        <v-btn icon href="https://play.google.com/store/apps/details?id=com.bibleandjournalapp.mychurchapp" target="_blank">
                            <v-icon size="20px">fab fa-google-play</v-icon>
                        </v-btn>
                    </div>
                </v-layout>
            </v-footer>
        </v-app>
    </div>
</template>

<script>    
    export default {
        name: 'App',
        data () {
            return {
                drawer: null,
                menuItems: [
                    { page: 'home', icon: 'home', label: 'Home' },
                    { page: 'contact', icon: 'forum', label: 'Connect' },
                    { page: 'smallgroups', icon: 'group', label: 'Small Groups' },
                    { page: 'volunteer', icon: 'how_to_reg', label: 'Sign Up' },
                    { page: 'calendar', icon: 'event', label: 'Calendar' },
                    { page: 'give', icon: 'favorite', label: 'Give' },
                    { page: 'about', icon: 'info', label: 'About' }
                ]
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .logo {
        margin: 20px 16px;
        width: 260px;
        height: 100px;
    }

    [v-cloak] {
        display: none;
    }
</style>

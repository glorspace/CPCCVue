<template>
    <v-container fluid grid-list-lg>
        <v-layout column>
            <v-flex xs4>
                <v-card tile dark width="620px">
                    <v-card-media src="http://www.centerpointesc.com/sermons/2018/simple_man/simple_man.jpg" height="348px">
                    </v-card-media>
                    <v-card-actions>
                        <v-btn flat color="blue">Sermon Media</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn flat color="blue">Archive</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs4>
                <v-card tile width="620px" to="http://www.centerpointesc.com/breeze_signup.html">                
                    <v-card-media src="http://www.centerpointesc.com/images/breeze-banner.jpg" height="75px">
                    </v-card-media>
                </v-card>
            </v-flex>
            <v-flex xs4>
                <v-card tile width="620px" to="http://www.centerpointesc.com/resources.html">                
                    <v-card-media src="http://www.centerpointesc.com/images/resources-banner.jpg" height="75px">
                    </v-card-media>
                </v-card>
            </v-flex>
            <v-flex xs4>
                <v-card tile width="620px" to="http://www.lexingtonchristiancounseling.org/">                
                    <v-card-media src="http://www.centerpointesc.com/images/LexCounsel-ad.jpg" height="75px">
                    </v-card-media>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>

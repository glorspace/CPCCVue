<template>
<div>
    <iframe src="https://centerpointesc.breezechms.com/give/online"
        scrolling="no">
    </iframe>
</div>
</template>

<script>
export default {
    name: 'Give',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    iframe {
        padding: 10px;
        width: 100%;
        max-width: 776px;
        height: 1000px;
        border: none;
    }
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

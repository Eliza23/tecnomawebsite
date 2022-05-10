var app = new Vue({
    el: '#app',
    props: ['url'],
    created(){
        this.url = "/correoelectronico"
    }
})

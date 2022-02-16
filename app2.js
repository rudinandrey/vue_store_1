const store2 = window['store'];

Vue.createApp({
    methods: {
        btn_increase() {
            this.$store.commit('increment');
        }
    }
}).use(store2).mount('#app2');
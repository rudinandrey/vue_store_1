const store = window['store'];

Vue.createApp({
    data() {
        return {
            message: "Hello world"
        }
    },
    computed: {
        counter() {
            return this.$store.state.count;
        }
    }
}).use(store).mount("#app");



const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            details: 'Product details',

        }
    },
    methods: { 
        updateCart(id){
            this.cart.push(id)
        },
        remove(id){
            const index = this.cart.indexOf(id)
            this.cart.splice(index, 1)
        }
    } 
})

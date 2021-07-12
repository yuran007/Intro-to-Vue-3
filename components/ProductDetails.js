app.component('product-details', {
    props: {
        details: {
            type: String,
            required: true,
         }

    },
    template: /*html*/ 
    `<div v-bind:details="productDetails">{{ details }}</div>`,
    methods: {
        productDetails(){
            return this.details
        }
    }
})
const { createApp } = Vue

createApp({
    data() {
        return {

            email: "",
            numberOfIterations: 10,

        }
    },

    mounted() {

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {

            console.log(result)

            this.email = result.data.response
        });
    }

}).mount("#app");
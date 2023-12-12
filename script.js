const { createApp } = Vue;

createApp({
    data() {
        return {
        email: '',
        };
    },

    methods: {
        getNewMail() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
            console.log(response);
            this.email = response.data.response;
            })
        },
    },

    created() {
        for (let i = 0; i < 10; i++) {
            this.getNewMail();
        }
    },
}).mount('#app');

const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [],
        };
    },

    methods: {
        getNewMail() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
            console.log(response);
            this.emails.push(response.data.response);
            })
        },
    },

    created() {
        for (let i = 0; i < 10; i++) {
            this.getNewMail();
        }
    },
}).mount('#app');

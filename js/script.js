// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
new Vue ({
    el: '#app',
    data: {
        email: '',
    },
    methods: {
        getEmail () {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(myEmail => {
                console.log(myEmail)
                this.email = myEmail.data.response
            })
        }
    }
})
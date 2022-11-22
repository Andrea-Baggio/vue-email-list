// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
new Vue ({
    el: '#app',
    data: {
        arrEmail: [],
    },
    methods: {
        getEmail () {
            for (let i = 0; i < 10; i++) {           
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(myEmail => {
                    this.arrEmail.push(myEmail.data.response)
                })
            }
        }
    }
})

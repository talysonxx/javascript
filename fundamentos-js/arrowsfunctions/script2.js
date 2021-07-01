/*(() => {
    const getPerson = () => ({name: 'Sérgio Moro', 'eye-color': 'black'})
    console.log(getPerson())
})()*/

// THIS DENTRO DA ARROW FUNCTION
(() => {
    function Person() {
        this.year = 0

        setInterval(function () {
            this.year = this.year + 1
        }, 1000)
        console.log('This e year:', this, this.year)
    }
    const p1 = {}
    Person.call(p1)
})()
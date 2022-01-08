//замыкания
//написать свою функцию bind

function logPerson(){
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: "Max", age: 22, job: "Frontend"}
const person2 = {name: "Mary", age: 28, job: "Backend"}

function bind (context, fn) {
    return function(...args){
        fn.apply(context, args)

    }
}

bind(person1, logPerson)()
bind(person1, logPerson)()

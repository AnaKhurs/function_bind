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


//proto
let obj = {name: 'Evgen'};
let obj2 = {
    sayName() {
        console.log(this.name);
    }
};
obj2.sayName.bind(obj)();

Function.prototype._bind = function(ctx, ...args) {
       const _this = this;
    return function(...args2) {
        return _this.apply(ctx, [...args, ...args2]);
    }
}
obj2.sayName._bind(obj)();

Function.prototype.__bind = function (ctx, ...args) {
    ctx.___someHidenMethod___ = this;
    return function (...args2) {
        return ctx.___someHidenMethod___(...args, ...args2);
    }
}

//obj.sayName = obj2.sayName

obj2.sayName.__bind(obj)();
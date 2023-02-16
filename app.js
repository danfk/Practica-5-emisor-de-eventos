let obj = {
    nombre: "Carlos",
    edad: 44,
    apellido: "Montecarlo",
    keypress: function() {
        console.log("Se ha presionado una tecla");
    },
    mouseOver: function () {
        console.log("El puntero del mouse esta arriba");
    }
}
console.log(obj.nombre);
console.log(obj["nombre"]);

let myKey = "nombre";
console.log(obj[myKey]);

myKey = "keypress";
console.log(obj[myKey]());
myKey = 'keypress';
console.log(obj[myKey]());

let myArray = [];

myArray.push(4);
myArray.push("una cadena");
myArray.push(obj);
myArray.push(function() {
    console.log("Hola desde el array");
})

console.log(myArray);

let funcArray = [];

funcArray.push(() =>{
    console.log("Funcion 1");
});

funcArray.push(()=> {
    console.log("Funcion 1");
});

funcArray.push(()=> {
    console.log("Funcion 3");
});

funcArray.forEach((item) => {
    item();
});

function Emitter() {
    this.events = {};
}

Emitter.prototype.on =  function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function (type) {
    if (this.events[type]) {
        this.events[type].forEach(function (listener) {
            listener();
        })
    }
}

module.exports = Emitter;
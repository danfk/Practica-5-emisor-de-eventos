var Emitter = require('./app.js');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said haello.');
});

emtr.on('greet', () => {
    console.log('A greeting ocurred!');
});

console.log("Hello!");
emtr.emit('greet');

//Se ejecuta todo el código de ambos archivos.

emtr.on('jump', () => {
    console.log('somone jumped!');
});

console.log(emtr);
emtr.emit('jump');

//Imprime la función Emitter de manera desglosada y
//greet y jump aparecen como funciones anonimas
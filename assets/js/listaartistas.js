const labelnombre = document.getElementById('nombrelabel')
const labelnacion = document.getElementById('nacionlabel')
const labeltrabajos = document.getElementById('trabajolabel')



let nombrealmacenado = localStorage.getItem('nombrestorage')
let nacionalmacenada = localStorage.getItem('nacionstorage')
let trabajoalmacenado = localStorage.getItem('trabajostorage')
console.log(nombrealmacenado)

labelnombre.innerText = nombrealmacenado
labelnacion.innerText = nacionalmacenada
labeltrabajos.innerText = trabajoalmacenado

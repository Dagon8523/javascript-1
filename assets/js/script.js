let divboton=document.getElementById("boton")
let divnombre=document.getElementById("nombre")
let divnacionalidad=document.getElementById("nacionalidad")
let divprofesion=document.getElementById("profesion")
let divtrabajos=document.getElementById("trabajos-musicales")

let botonrestar=document.getElementById("restar")
let botonsumar=document.getElementById("sumar")
let botonlimpiar=document.getElementById('limpiar')


divboton.addEventListener('click',llenardatos)
botonrestar.addEventListener('click',restar)
botonsumar.addEventListener('click',sumar)




function llenardatos(){
    let jsnombre=prompt("digita el nombre de cancerbero")
    divnombre.textContent=jsnombre;
    let jsnacionalidad=prompt("digita pais nacimiento de cancerbero")
    divnacionalidad.textContent=jsnacionalidad;
    let jsprofesion=prompt("digita la profesion de cancerbero")
    divprofesion.textContent=jsprofesion;
    let jstrabajos=prompt("digita los trabajos de cancerbero")
    divtrabajos.textContent=jstrabajos;
} 

function restar(e){
    e.preventDefault()
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let num1int=parseInt(num1)
    let num2int=parseInt(num2)
    let resultado=(num1int-num2int)
    let inputresult=document.getElementById('resultado')
    inputresult.value=resultado
    alert("El resultado de la resta es "+resultado)
}

function sumar(e){
    e.preventDefault()
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let num1int=parseInt(num1)
    let num2int=parseInt(num2)
    let resultado=(num1int+num2int)
    let inputresult=document.getElementById('resultado')
    inputresult.value=resultado
    alert("El resultado de la suma es "+resultado)

}
function dividir(e){
    e.preventDefault()
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let num1int=parseInt(num1)
    let num2int=parseInt(num2)
    let resultado=(num1int/num2int)
    let inputresult=document.getElementById('resultado')
    inputresult.value=resultado
    alert("El resultado de la division es "+resultado)

}

function multiplicar(e){
    e.preventDefault()
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let num1int=parseInt(num1)
    let num2int=parseInt(num2)
    let resultado=(num1int*num2int)
    let inputresult=document.getElementById('resultado')
    inputresult.value=resultado
    alert("El resultado de la multiplicacion es "+resultado)

}
function limpiar(e){
    e.preventDefault()
    let num1 = document.getElementById('num1')
    let num2 = document.getElementById('num2')
    let inputresult=document.getElementById('resultado')
    num1.value=''
    num2.value=''
    inputresult.value=''


}


const mensajenumero1=document.getElementById('mensajealertanumero1')

function validarcalculadora(e){
    e.preventDefault()
    let inputnum1= document.getElementById('num1').value
    console.log(inputnum1)
    if(inputnum1==''){
        mensajenumero1.innerText="Por favor llena el cuadro de numero 1"
    }


}


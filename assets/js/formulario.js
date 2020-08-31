const mensajenombre=document.getElementById('mensaje-nombre')
const mensajeapellido=document.getElementById('mensaje-apellido')
const mensajecorreo=document.getElementById('mensaje-correo')
const mensajecontraseña=document.getElementById('mensaje-contraseña')
const mensajeedad=document.getElementById('mensaje-edad')

function validarformulario(e){
    e.preventDefault()
    let inputNombre=document.getElementById('nombre').value 
    console.log(inputNombre)
    if(inputNombre ==""){
        mensajenombre.innerText="Por favor llena el campo de nombre"
    }
    let inputApellido=document.getElementById("apellido").value
    if(inputApellido==""){
        mensajeapellido.innerText="Por favor llene el campo de apellido"
    }
    let inputCorreo=document.getElementById("correo").value
    if(inputCorreo==""){
        mensajecorreo.innerText="Por favor llene el campo de correo"
    }
    let inputContraseña=document.getElementById("contraseña").value
    if(inputContraseña==""){
        mensajecontraseña.innerText="Por favor llene el campo de contraseña"
    }
    let inputEdad=document.getElementById("edad").value
    if(inputEdad==""){
        mensajeedad.innerText="Por favor llene el campo de edad"
    }


}
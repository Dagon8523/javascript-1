var divperfil=document.getElementById("perfil")
var divnombre=document.getElementById("nombre")
var divnacionalidad=document.getElementById("nacionalidad")
var divprofesion=document.getElementById("profesion")
var divtrabajos=document.getElementById("trabajos-musicales")

divperfil.addEventListener('click',()=>{
    console.log("este es el perfil vacio")
    console.log(divperfil)

    var jsnombre=prompt("digita el nombre de cancerbero")
    var jsnacionalidad=prompt("digita nacionalidad de cancerbero")
    var jsprofesion=prompt("digita la profesion de cancerbero")
    var jstrabajos=prompt("digita los trabajos de cancerbero")

    divnombre.textContent=jsnombre;
    divnacionalidad.textContent=jsnacionalidad;
    divprofesion.textContent=jsprofesion;
    divtrabajos.textContent=jstrabajos;

})




/* function llenardatos(){
    console.log("este es el perfil vacio")
    console.log(divperfil)

    var jsnombre=prompt("digita el nombre de cancerbero")
    var jsnacionalidad=prompt("digita nacionalidad de cancerbero")
    var jsprofesion=prompt("digita la profesion de cancerbero")
    var jstrabajos=prompt("digita los trabajos de cancerbero")

    divnombre.textContent=jsnombre;
    divnacionalidad.textContent=jsnacionalidad;
    divprofesion.textContent=jsprofesion;
    divtrabajos.textContent=jstrabajos;

} */


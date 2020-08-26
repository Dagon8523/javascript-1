var divboton=document.getElementById("boton")
var divnombre=document.getElementById("nombre")
var divnacionalidad=document.getElementById("nacionalidad")
var divprofesion=document.getElementById("profesion")
var divtrabajos=document.getElementById("trabajos-musicales")

divboton.addEventListener('click',llenardatos)




function llenardatos(){
   
     var jsnombre=prompt("digita el nombre de cancerbero")
    divnombre.textContent=jsnombre;
    var jsnacionalidad=prompt("digita pais nacimiento de cancerbero")
    divnacionalidad.textContent=jsnacionalidad;
    var jsprofesion=prompt("digita la profesion de cancerbero")
    divprofesion.textContent=jsprofesion;
    var jstrabajos=prompt("digita los trabajos de cancerbero")
    divtrabajos.textContent=jstrabajos;


} 


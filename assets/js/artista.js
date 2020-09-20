

const botonenviar = document.getElementById('botonenviar')
const labelnombre = document.getElementById('nombrelabel')

const formregistro = document.getElementById('formulario')

formregistro.addEventListener('submit',(e)=>{
    e.preventDefault()
    const nombreartista = document.getElementById("inputnombre").value
    const nacionartista = document.getElementById('inputnacionalidad').value
    const trabajosartista = document.getElementById('inputtrabajos').value

    const artista ={
        nombre: nombreartista,
        nacionalidad:nacionartista,
        discos:trabajosartista,
    }
    console.log(artista)
})
console.log(formregistro)




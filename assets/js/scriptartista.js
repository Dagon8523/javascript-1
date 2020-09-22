import{ Artista } from './artista.js';

const formregistro = document.getElementById('formulario')
console.log(formregistro)

let listadeartistas= []

formregistro.addEventListener('submit',(e)=>{
    e.preventDefault()
    const nombreartista = document.getElementById("inputnombre").value
    const nacionartista = document.getElementById('inputnacionalidad').value
    const trabajosartista = document.getElementById('inputtrabajos').value
    

    let artista = new Artista ({
        nombre : nombreartista,
        nacion : nacionartista,
        disco : trabajosartista,
    });

    guardarstorage(artista);
    alert('usuario creado correctamente')
    window.location.pathname= '/assets/pages/16_09_2020/listaartistas.html'
});

const guardarstorage = (artista) =>{
    if (localStorage.getItem('artista')=== null){
        listadeartistas.push(artista)
        const guardarartista= JSON.stringify(listadeartistas)
        localStorage.setItem('artista',guardarartista)
    }else{
        listadeartistas = JSON.parse(localStorage.getItem('artista'))
        listadeartistas.push(artista)
        const guardarartista= JSON.stringify(listadeartistas)
        localStorage.setItem('artista',guardarartista)
    }
}




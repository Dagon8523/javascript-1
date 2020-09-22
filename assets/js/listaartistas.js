const tabla = document.getElementById('tablaUsuario')

const artistastorage = ()=>{
    const artistaguardado = JSON.parse(localStorage.getItem('artista'))
    return artistaguardado
}

console.log(artistastorage())

const listarartistas= ()=>{
    if(localStorage.getItem('artista')!== null){
        const datostabla = artistastorage().map((artista , item)=>

             `
             <tr>
                  <th>${item+1}</th>
                  <td>${artista.nombre}</td>
                  <td>${artista.nacion}</td>
                  <td>${artista.disco}</td>
             </tr>
             `
        )
        tabla.innerHTML = datostabla.join('')
    }
}

listarartistas()




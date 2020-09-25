const inputletters = document.getElementById('inputletters')
const inputnumbers = document.getElementById('inputnumbers')

const button1 = document.getElementById('button1')

/* let letras=[A,B,C,D,F,G,H,I,J]
let numeros=[1,2,3,4,5,6,7,8,9,0] */

function inserletras(letra){
    let letrainput=letra
    
    let numletra=parseInt(letrainput)
    console.log(numletra)
    switch (numletra) {
        
        case 1:
            inputletters.value="A"
        case 2:
            inputletters.value="B"
        case 3:
            inputletters.value="C"
        case 4:
            inputletters.value="D"
        case 5:
            inputletters.value="E"
        case 6:
            inputletters.value="F"
        case 7:
            inputletters.value="G"
        case 8:
            inputletters,value="H"
        case 9:
            inputletters.value="I"
        case 0:
            inputletters.value="HUPEUTA"                                
            
        break;
    
        default:
            console.log("ya sali del switch")
            break;
    }

}


button1.onclick= ()=>{
    letra=5
    inserletras(letra);
    console.log("se ejecuto la funcion del click")
}
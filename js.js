
function limparCampos(element){
    document.getElementById(element).value = "";
}

function incluiValores(valor,campo){

    document.getElementById(campo).value += valor;

}


function Mostrarresult(rslt){

    document.getElementById("resultado").value = rslt;
}


function Calcular(campo){

    let result = 0;

    if(campo.value.indexOf("x") !== -1){
        
        result = eval(campo.value.replace(/x/g,"*"));
        
        Mostrarresult(result)   
    }
    else{

        result = eval(campo.value);
        Mostrarresult(eval(result));
    }

}


var button = document.getElementsByClassName("num");

for(i = 0; i <= button.length - 1;i++){

    button[i].addEventListener("click",function(){
        
        if(this.id == "limparcampos"){

            limparCampos("resultado");      
        }
        else if(this.id == "limparultimo"){

            let txt = document.getElementById("resultado").value.split("");
            txt.pop();
            Mostrarresult(txt.toString().replace(/,/g,""));


        }
        else if(this.id == "calcular"){

             Calcular(document.getElementById("resultado"));
        }
        else{
            incluiValores(this.innerText,"resultado");
            console.log(this.value);
        }
    });
}

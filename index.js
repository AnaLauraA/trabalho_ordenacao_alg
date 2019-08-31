function 




















/----------------------------------------------------------------

function bubblesort(vet){
    for(var i = vet.length - 1; i >= 0; i--){
        for(var j = 0; j < i; j++){
            if(vet[j] > vet[j + 1]){
                var aux = vet[j];
                vet[j] = vet[j+1];
                vet[j+1] = aux;
            }
        }
    }
}

function selecaoDireta(vet){
    for(var i = 0; i < vet.length - 1; i++){
        var menor = vet[i];
        var posMenor;
        for(var j = i + 1; j < vet.length;j++){
            if(vet[j] < menor){
                menor = vet[j];
                posMenor = j;
            }
        }
        var aux = vet[i];
        vet[i] = menor;
        vet[posMenor] = aux;
    }
}

function insercaoDireta(vet){
    for(var i = 1; i < vet.length; i++){
        for(var j = i; j >= 0; j--){
            if(vet[j] < vet[j - 1]){
                var aux = vet[j];
                vet[j] = vet[j - 1];
                vet[j - 1] = aux;
                break;
            }
        }
    }
    return vet;
}
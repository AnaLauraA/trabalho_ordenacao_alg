function 




















/----------------------------------------------------------------

function tempoFuncao(func, vet){
    var t0 = performance.now();
    func(vet);
    var t1 = performance.now();
    return t1 - t0;
}

function bubblesort(vet){
    var i, j, aux;
    for(i = vet.length - 1; i >= 0; i--){
        for(j = 0; j < i; j++){
            if(vet[j] > vet[j + 1]){
                aux = vet[j];
                vet[j] = vet[j+1];
                vet[j+1] = aux;
            }
        }
    }
}

function selecaoDireta(vet){
    var i, j, menor;
    for(i = 0; i < vet.length - 1; i++){
        menor = vet[i];
        for(j = i + 1; j < vet.length;j++){
            if(vet[j] < menor){
                menor = vet[j];
            }
        }
        vet[i] = menor;
    }
}

function insercaoDireta(vet){
    var i, j, num;
    for(i = 1; i < vet.length; i++){
        num = vet[i];
        j = i - 1;
        while(j >= 0 && vet[j] > num){
            vet[j + 1] = vet[j];
            j--;
        }
        vet[j + 1] = num;
    }
}
function criaVetor(tam, tipo) {
	var tam = tam;
	var i;
	var vet = []; 
	if (tipo == 'aleatorio') {
		min = Math.ceil(1);
		max = Math.floor(tam);
		for (i = 0; i < tam; i++){
			vet.push(Math.floor(Math.random() * (max - min + 1)) + min);
		}
	}
	else if(tipo == 'crescente'){
		for(i = 1; i<= tam; i++){
			vet.push(i);
		}
	}
	else{
		for(i = tam; i>= 1; i--){
			vet.push(i);
		}
	}
	return vet;
}


	//------------------------------------------------------------------------------------------

	function tempoFuncao(func, vet) {
		var t0 = performance.now();
		func(vet);
		var t1 = performance.now();
		console.log(t1 - t0);
	}
	//------------------------------------------------------------------------------------------

	function bubblesort(vet) {
		var i, j, aux;
		for (i = vet.length - 1; i >= 0; i--) {
			for (j = 0; j < i; j++) {
				if (vet[j] > vet[j + 1]) {
					aux = vet[j];
					vet[j] = vet[j + 1];
					vet[j + 1] = aux;
				}
			}
		}
	}
	//------------------------------------------------------------------------------------------

	function selecaoDireta(vet) {
		var i, j, menor, pos, aux;
		for (i = 0; i < vet.length - 1; i++) {
			menor = vet[i];
			for (j = i + 1; j < vet.length; j++) {
				if (vet[j] <= menor) {
                    menor = vet[j];
                    pos = j;
				}
            }
            aux = vet[i]
            vet[i] = menor;
            vet[pos] = aux;
            
		}
	}
	//------------------------------------------------------------------------------------------
	function insercaoDireta(vet) {
		var i, j, num;
		for (i = 1; i < vet.length; i++) {
			num = vet[i];
			j = i - 1;
			while (j >= 0 && vet[j] > num) {
				vet[j + 1] = vet[j];
				j--;
			}
			vet[j + 1] = num;
		}
	}
	//-----------------------------------------------------------------------

	function  quicksort(array, left = 0, right = array.length - 1){
		var i = left;
		var j = right;
		var tmp;
		pivotidx = (left + right) / 2;
		var pivot = parseInt(array[pivotidx.toFixed()]); 

		while (i <= j){
			while (parseInt(array[i]) < pivot)
				i++;
			while (parseInt(array[j]) > pivot)
				j--;
			if (i <= j){
				tmp = array[i];
				array[i] = array[j];
				array[j] = tmp;
				i++;
				j--;
			}
		}
	
		if (left < j)
			quicksort(array, left, j);
		if (i < right)
			quicksort(array, i, right);
		return array;
	}
	//-----------------------------------------------------------------------------

	function shellsort(vetor) {
		var tam = vetor.length
		var i, j, value;
		var gap = 1;
		while (gap < tam) {
			gap = 3 * gap + 1;
		}
		while (gap > 1) {
			gap = parseInt(gap / 3);
			for (i = gap; i < tam; i++) {
				value = vetor[i];
				j = i - gap;
				while ((j >= 0) && (value < vetor[j])) {
					vetor[j + gap] = vetor[j];
					j = j - gap;
				}
				vetor[j + gap] = value;
			}
		}
	}

	//-------------------------------------------------------------------------------

	function heapsort(vetor) {
		var tam = vetor.length
		var i = tam / 2, pai, filho, t;
		for (; ;) {
			if (i > 0) {
				i--;
				t = vetor[i];
			}
			else {
				tam--;
				if (tam == 0)
					return;
				t = vetor[tam];
				vetor[tam] = vetor[0];
			}
			pai = i;
			filho = i * 2 + 1;
			while (filho < tam) {
				if ((filho + 1 < tam) && (vetor[filho + 1] > vetor[filho]))
					filho++;
				if (vetor[filho] > t) {
					vetor[pai] = vetor[filho];
					pai = filho;
					filho = pai * 2 + 1;
				}
				else
					break;
			}
			vetor[pai] = t;
		}
	}

function criaVetor()




1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
var num = new Array(9); //criando vetor com 9 posições
for(var i=0;i<9;i++){ //laço para percorrer todo o vetor
	var randomico = Math.floor(Math.random()*9)+1; //gerando número aleatório
	var existe=false; //para saber se o numero existe ou não no vetor
	for(var cont=0;cont<i;cont++){ //função que percorre o vetor até onde já tenha sido preenchido
		if(num[cont]==randomico){ //verifica se o item no vetor é igual ao gerado 
			existe=true; //se é igual a variável existe recebe verdadeiro
			break; //e o laço de verificação é interrompido
		}else{//se não é igual
			existe=false; //existe recebe falso
		}
	} //fim do laço que verifica a existência
	if(!existe){ //se existe é igual a false
		num[i]=randomico; //o indice do vetor recebe o número gerado
	}else{ //se é verdadeiro
		i--; //o índice é decrementado para que haja um novo teste
	}
} // fim do laço que percorre todo o vetor






//----------------------------------------------------------------
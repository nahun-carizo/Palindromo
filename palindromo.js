function EsPalindromo(frase){
	let tamano, inco, valor='SI';
	tamano= frase.length-4;

	for(let y=0; y<=Math.round(tamano/2); y++){
		if(frase.charAt(y)!=frase.charAt((tamano)-y)){
			inco=1;
		}
	}

	if(inco>0){
		valor='NO';
	}
	
	return valor;
}

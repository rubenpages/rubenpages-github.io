// executar a tarefa de abrir o presente
	// chamar o elemento definido em html 
	function abrirPresente() {
    
	    // aparecer coração após se clicar no botão 
	    // declarar variável e atribuir uma ligação ao elemento id definido em html  
	    var x = document.getElementById('coracao');
	    

	    	// condição
	    	// se o coração estiver escondido   
		    if (x.style.display === 'none') {

		    	// atribuir aparecer
		        x.style.display = 'block';

		      // caso contrário, atribuir esconder   
		    } else {
		        x.style.display = 'none';
		    }


	    // esconder prenda após se clicar no botão 
	    var x = document.getElementById ('prenda');  

		    if (x.style.display === 'block') {
		    	x.style.display = 'none'; 
		    } else {
		    	x.style.display = 'block';   	
		    }


		// esconder título após se clicar no botão 
	    var x = document.getElementById ('titulo');  

		    if (x.style.display === 'block') {
		    	x.style.display = 'none'; 
		    } else {
		    	x.style.display = 'block';   	
		    }
    	

		// esconder texto após se clicar no botão 
	    var x = document.getElementById ('texto');  

		    if (x.style.display === 'block') {
		    	x.style.display = 'none'; 
		    } else {
		    	x.style.display = 'block';   	
		    }
    	
	}




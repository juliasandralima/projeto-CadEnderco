'use restrict'; //modo restrito

 

//limpar formulario

const limparFormulario = () =>{

    document.getElementById('rua').value = '';

    document.getElementById('estado').value = '';

    document.getElementById('cidade').value = '';

    document.getElementById('bairro').value = '';

}

 

// verifica se o cep é valido

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

 

//preenche campos do formulario

const preencherFormulario = (endereco) =>{

    document.getElementById('rua').value = endereco.logradouro;

    document.getElementById('estado').value = endereco.bairro;

    document.getElementById('cidade').value = endereco.localidade;

    document.getElementById('bairro').value = endereco.uf;

 

}

 

/*

função para consumo de API ultilizando a função do tipo assincrona

*/

 

const pesquisarCep = async() =>{

    limparFormulario();

    const url = `http://viacep.com.br/ws/${cep.value}/json/`;

   

    if(cepValido(cep.value)){

        const dados = await fetch(url);

        const addres = await dados.json();

 

        if(addres.hasOwnProperty('erro')){

            alert('CEP não encontrado');

        }else{

            preencherFormulario(addres);

        }

    }else{

        alert('CEP incorreto');

    }

}

 

//add um comentario DOM, no input CEP

 

document.getElementById('cep').addEventListener('focusout', pesquisarCep);

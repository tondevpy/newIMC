let contador = 0;

function calcular() {
  if (contador === 0) {
    contador = 1;
    let retorno = document.querySelector('.retorno');
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let p = document.createElement('p');
    p.style.color = '#767676'
    retorno.appendChild(p);

    if (nome && altura && peso) {
      p.innerHTML = 'Carregando o seu resultado...'
      p.style.color = '#767676'
      setTimeout(() => {
        p.innerHTML = 'Estamos quase lá...'
        p.style.color = '#767676'
  
      }, 1000);
      setTimeout(() => {
        altura = altura / 100;
        let imc = peso / (altura * altura);
        let newImc = imc.toFixed(2);
        if (newImc < 18.5) {
          
          p.innerHTML = `RESULTADO:<br>
        Nome: ${nome}<br>
        Resultado do seu IMC: ${newImc} <br>
        Você esta abaixo do peso, procure ajuda de um especialista.`;
        } else if (newImc >= 18.5 && newImc <= 24.99) {
          
          p.innerHTML = `RESULTADO:<br>
        Nome: ${nome}<br>
        Resultado do seu IMC: ${newImc} <br>
        De acordo com o IMC o seu peso está normal!`;
        } else if (newImc >= 25 && newImc <= 29.99) {
          
          p.innerHTML = `RESULTADO:<br>
        Nome: ${nome}<br>
        Resultado do seu IMC: ${newImc} <br>
        De acordo com o IMC você está com sobrepeso, procure ajuda de um especialista.`;
        } else {
         
          p.innerHTML = `RESULTADO:<br>
        Nome: ${nome}<br>
        Resultado do seu IMC: ${newImc} <br>
        De acordo com o IMC você está com Obesidade, procure ajuda de um especialista.`;
        }
        document.getElementById('calcular').innerHTML = 'Limpar'
        document.getElementById('calcular').style.background = 'red'
      }, 3000); 

    
    } else {
      p.style.color = '#FF9900';
      p.innerHTML =
        'Preencha todos os campos corretamente para gerar o resultado...';
    }
  } else {
    document.querySelector('.retorno').innerHTML = '';
    contador = 0;
    document.getElementById('nome').value = ''
    document.getElementById('altura').value = ''
    document.getElementById('peso').value = ''
    document.getElementById('calcular').innerHTML = 'Calcular'
    document.getElementById('calcular').style.background = '#FF9900'
  }

  
}

function validarNumeros(input) {
  // Remove todos os caracteres que não sejam dígitos numéricos
  input.value = input.value.replace(/\D/g, '');
}

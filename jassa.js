function calcular() {
  let nm1 = document.getElementById("ip1");
  let nm2 = document.getElementById("ip2");
  let op = document.getElementById("operacao");
  const lista = document.getElementById("lista");
   

  if(nm1.value == ""){
    alert("foi garoto, kd o número 1");
    nm1.style.border = "1px solid red";
  }else{
    nm1.style.border = null;
  }  

  if(op.value == ""){
    alert("foi garoto, kd a operação");
    op.style.border = "1px solid red";
  }else{
    op.style.border = null;
  } 

  if(nm2.value == ""){
    alert("foi garoto, kd o número 2");
    nm2.style.border = "1px solid red";
  }else{
    nm2.style.border = null;
  }


  if(nm1.value&&nm2.value != ""){
    let L = document.createElement('li');
    switch(op.value){
      case "+":
        document.getElementById("resultado").value = parseFloat(nm1.value) + parseFloat(nm2.value);
        let newText = document.createTextNode(`${nm1.value} ${op.value} ${nm2.value} = ${document.getElementById("resultado").value} `);
        L.appendChild(newText);
        lista.appendChild(L);  
        break;
      case "-":
        document.getElementById("resultado").value = parseFloat(nm1.value) - parseFloat(nm2.value);
        let newText1 = document.createTextNode(`${nm1.value} ${op.value} ${nm2.value} = ${document.getElementById("resultado").value} `);
        L.appendChild(newText1);
        lista.appendChild(L);
        break;
      case "*":
        document.getElementById("resultado").value = parseFloat(nm1.value) * parseFloat(nm2.value);
        let newText2 = document.createTextNode(`${nm1.value} ${op.value} ${nm2.value} = ${document.getElementById("resultado").value} `);
        L.appendChild(newText2);
        lista.appendChild(L);
        break;
      case "/":
        document.getElementById("resultado").value = parseFloat(nm1.value) / parseFloat(nm2.value);
        let newText3 = document.createTextNode(`${nm1.value} ${op.value} ${nm2.value} = ${document.getElementById("resultado").value} `);
        L.appendChild(newText3 );
        lista.appendChild(L);
        break;
    }
  }

/*  if(nm1.value&&nm2.value != ""){
    if(op.value == "+"){
      document.getElementById("resultado").value = parseFloat(nm1.value) + parseFloat(nm2.value);
      let L = document.createElement('li');
      let newText = document.createTextNode(`${nm1.value} ${op.value} ${nm2.value} = ${document.getElementById("resultado").value} `);
      L.appendChild(newText);
      lista.appendChild(L);    
    }
    if(op.value == "-"){
      document.getElementById("resultado").value = parseFloat(nm1.value) - parseFloat(nm2.value);
      let L = document.createElement('li');
      let newText = document.createTextNode(`${nm1.value} ${op.value} ${nm2.value} = ${document.getElementById("resultado").value} `);
      L.appendChild(newText);
      lista.appendChild(L);
    }
    if(op.value == "*"){
      document.getElementById("resultado").value = parseFloat(nm1.value) * parseFloat(nm2.value);
      let L = document.createElement('li');
      let newText = document.createTextNode(`${nm1.value} ${op.value} ${nm2.value} = ${document.getElementById("resultado").value} `);
      L.appendChild(newText);
      lista.appendChild(L);
    }
    if(op.value == "/"){
      document.getElementById("resultado").value = parseFloat(nm1.value) / parseFloat(nm2.value);
      let L = document.createElement('li');
      let newText = document.createTextNode(`${nm1.value} ${op.value} ${nm2.value} = ${document.getElementById("resultado").value} `);
      L.appendChild(newText);
      lista.appendChild(L);
    }
  }
*/
}//funcao calcular'

function Esconder1linha() {
  let p = document.getElementsByTagName("p");
  for (i = 0; i < p.length; i++) {
    p[i].style.visibility = "hidden";
  }
} //finaliza funcao esconder


function Mostrar1Linha() {
  let p = document.getElementsByTagName("p");
  for (i = 0; i < p.length; i++) {
    p[i].style.visibility = "visible";
  }
} //finaliza funcao mostrar

function cor() {
  var hexadecimais = '0123456789ABCDEF';
  var cor = '#';

  // Pega um número aleatório no array acima
  for (var i = 0; i < 6; i++) {
    //E concatena à variável cor
    cor += hexadecimais[Math.floor(Math.random() * 16)];

  }
  document.body.style.backgroundColor = cor;

} //finaliza funcao cor


function LimparTudo(ip1, ip2, operacao, resultado, lista) {
  ip1.value = "";
  ip2.value = "";
  operacao.value = "";
  resultado.value = "";
  document.body.style.backgroundColor = null;
  document.getElementById("controle");
  let borda = document.getElementsByClassName("borda");
  for(i = 0; i < borda.length; i++){
    borda[i].style.border = null;
  }
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
} //finaliza funcao limpar
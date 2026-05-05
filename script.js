let form = document.getElementById('cadastro'); 
let lista = document.getElementById('listaAluno'); 

form.addEventListener('submit', function(event){
   event.preventDefault();

   const nome = document.getElementById('nomeAluno').value;
   const idade = document.getElementById('idadeAluno').value; 
   const login = document.getElementById('loginAluno').value; 
   const pizza = document.getElementById('pizzaFavorita').value; 
   const SN = document.getElementById('SN').value; 

   const novoItem = document.createElement('li');
   if (SN === "sim"){
   novoItem.innerHTML = `<strong>${nome}</strong> - ${idade} anos - Login: ${login} - Pizza favorita: ${pizza} - Resposta: ${SN}, Obrigado`;
   }
  else{
       novoItem.innerHTML = `<strong>${nome}</strong> - ${idade} anos - Login: ${login} - Pizza favorita: ${pizza} - Resposta: ${SN}, Vai pro caralho intão. seu miseravel, ridiculo`;
   }
   lista.appendChild(novoItem);


   form.reset();
});



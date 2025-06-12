function binario() {
   var numero = document.getElementById('numero').value;
   var i;
   var resultado = [];
   var x = 0;
   var conteudo = '';

   for (i = 20; i >= 0; i--) {
       resultado[i] = numero % 2;
       numero = parseInt(numero / 2);
       if (numero >= 1) {
           x = x + 1;
       }
   }

   x = 20 - x;

   for (i = x; i <= 20; i++) {
       conteudo += resultado[i];
   }

   document.getElementById("display").innerHTML = conteudo;
}
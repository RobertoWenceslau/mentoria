


function myFunction()
{
    var x = document.getElementById('contextText');
    /* a variável x é o texto dentro da div com id="contextText" */
    if (x.style.display ==='none'){
      /* se o sytle da div for none, ou seja, estiver invisível... */
      x.style.display = 'block';
      /* ... então faça o style ser block, ou seja, ficar visível... */
    } else {
      x.style.display = 'none';
      /* ... caso contrário, (se já estiver visível) faça sumir.*/
    }
  }



  $("p").removeClass("texto").addClass("texto-paragrafo");
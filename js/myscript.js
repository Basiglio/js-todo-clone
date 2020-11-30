// Esercizio: creare una to-do list, come quella fatta insieme stamattina, utilizzando Handlebars come templating engine.
// Consiglio: fate uno step alla volta, prima caricate Handlebars da CDN in pagina, poi provate a seguire i primi step della sezione "Usage", modificando le proprietà dell'oggetto context.


$(document).ready(
  function () {

    // GENERO ARRAY LISTA
    var list = [
      "Fare la spesa",
      "Fare i compiti",
      "Fare il bucato",
      "Dormire",
      "Pagare le bollette",
    ];

    // COMPILO HANDLEBARS
    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);

    // SCORRO NEL MIO ARRAY
    for (var i = 0; i < list.length; i++) {
      // DEFINISCO GLI ELEMENTI CHE VOGLIO GENERARE NEL HTML
      var context = {
        text: list[i]
      };
      //GENERO GLI ELEMENTI NEL HTML
      var html = template(context);
      //AGGIUNGO I MIEI <LI> DENTRO <UL>
      $("#todo").append(html);
    }
  }


);

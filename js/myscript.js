// Esercizio: creare una to-do list, come quella fatta insieme stamattina, utilizzando Handlebars come templating engine.
// Consiglio: fate uno step alla volta, prima caricate Handlebars da CDN in pagina, poi provate a seguire i primi step della sezione "Usage", modificando le proprietà dell'oggetto context.


$(document).ready(
  function () {


    // ESERCIZIO FATTO STAMATTINA

    // GENERO ARRAY LISTA
    // var list = [
    //   "Fare la spesa",
    //   "Fare i compiti",
    //   "Fare il bucato",
    //   "Dormire",
    //   "Pagare le bollette",
    // ];

    // COMPILO HANDLEBARS
    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);


    // ESERCIZIO FATTO STAMATTINA
    // // SCORRO NEL MIO ARRAY
    // for (var i = 0; i < list.length; i++) {
    //   // DEFINISCO GLI ELEMENTI CHE VOGLIO GENERARE NEL HTML
    //   var context = {
    //     text: list[i]
    //   };
    //   //GENERO GLI ELEMENTI NEL HTML
    //   var html = template(context);
    //   //AGGIUNGO I MIEI <LI> DENTRO <UL>
    //   $("#todo").append(html);
    // }



    // AGGANCIO ALLA PRESSIONE DELL'INVIO
    $("#text").keydown(
      function (event){
        // SE PREMO INVIO
        if (event.keyCode == 13) {
          // PRENDI IL TESTO CONTENUTO NEL CAMPO INPUT
          var newText = $("#text").val()
          // AGGIUNGI IL TESTO CONTENUTO IN INPUT NELLA UL
          var context = {
            text: newText
          };
          //GENERO GLI ELEMENTI NEL HTML
          var html = template(context);
          //AGGIUNGO IL MIO CONTENUTO ALL'HTML
          $("#todo").append(html);
          $(this).val('');
        }
      }
    );

    $("#submit").click(
      // QUANDO CLICCO SUL TASTO
      function (event){
        // COPIA IL CONTENUTO DI INPUT
        var newText = $("#text").val()
        var context = {
          text: newText
        };
        // SALVALO
        var html = template(context);
        // SCRIVILO
        $("#todo").append(html);
        $("#text").val('');
      }
    );


    // RENDO LA X CLICCABILE
    $(document).on("click", ".delete",
      function () {
        // RIMUOVO IL SUO GENITORE <LI> INSIEME ALLA X <SPAN>
        $(this).prev().remove();
        $(this).remove();
      }
    );
  }
);

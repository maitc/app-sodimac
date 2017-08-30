var dato;
// Carga de Modal con la página
$(document).ready(function() {
       $(window).on('load',function(){
       $('#squarespaceModal').modal('show');
   });
   
   /*function checkUno(){
   	   $(".check").change(function () {
    if ($(this).is(':checked')) {
        // Checkbox is checked..
        dato = true; //if checkbox is true is checked, validate
        console.log("checked");
        $(".btn-comparar").css({
            "height": "50px",
			"background-color": "black"
        });
        $(".btn-comparar").append('<button class="btn btn-overlay" >COMPARAR</button>');
        $(".btn-overlay").attr('disabled', 'disabled');
    } else{
    	dato = false
        //checkbox = false;//if checkbox is false is not checked, validate
    }
	});
   }; checkUno();

   /*function checkDos(){
   	$("#check-dos").change(function () {
    if ($(this).is(':checked')) {
        // Checkbox is checked..
        dato = true; //if checkbox is true is checked, validate
        console.log("hola");
    } else{
    	dato = false
        
        //checkbox = false;//if checkbox is false is not checked, validate
    }
	});
   }; checkDos();

   if(checkUno() && checkDos()){
   	dato = true;
   	/*$(".btn-overlay").removeAttr('disabled');
        $(".btn-overlay").css({
            "background-color": "red"
        });
    console.log("bye");    
   } */
   /*function check(element) {
	var cb1 = document.getElementById("checkbox1");
	var cb2 = document.getElementById("checkbox2");
	//var sub = document.getElementById("submit");
	if (cb1.checked == true  &&  cb2.checked == true){
	   //sub.disabled = false;
	   alert("Bien CTM");
	}
	else{
	   //sub.disabled = true;
	}
	}*/
	$('#accepted1,#accepted2').click(function () {
  if ($('#accepted1:checked,#accepted2:checked').length == 2)
    $('#id_complete').removeAttr('disabled');
  else
    $('#id_complete').attr('disabled','disabled');
	});
});


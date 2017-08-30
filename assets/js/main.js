/*maca*/
var dato;
// Carga de Modal con la página
$(document).ready(function() {
       $(window).on('load',function(){
       $('#squarespaceModal').modal('show');
   });

  var jsonApi = [{"name":
"Electrolux", "url":"http://sodimac.scene7.com/is/image/SodimacCL/2712636_01", "nam":"Enfriador de aire frío / calor", "price":"89990"},
{"name":
"Volker", "url":"http://sodimac.scene7.com/is/image/SodimacCL/2844338", "nam":"Aire acondicionado 12.000B black", "price":"249990"},
{"name":
"Wurden", "url":"http://sodimac.scene7.com/is/image/SodimacCL/3094006_01", "nam":"Aire acondicionado 12.000B black", "price":"249990"},
{"name":
"Wurden", "url":"http://sodimac.scene7.com/is/image/SodimacCL/3093999_01", "nam":"Aire acondicionado 9.000B Black", "price":"249990"},
{"name":
"Ursus Trotter", "url":"http://sodimac.scene7.com/is/image/SodimacCL/287797X", "nam":"Aire acondicionado portátil 9.000 BTU", "price":"299990"},
{"name":
"Kendal", "url":"http://sodimac.scene7.com/is/image/SodimacCL/2892359", "nam":"Aire acondicionado Split 18.000 BTU", "price":"439990"},
{"name":
"Honeywell", "url":"http://sodimac.scene7.com/is/image/SodimacCL/3192377", "nam":"Aire acondicionado MA14HCCD", "price":"469990"},
{"name":
"Kendal", "url":"http://sodimac.scene7.com/is/image/SodimacCL/2892367", "nam":"Aire acondicionado Split 24000 btu", "price":"579990"}]

jsonApi.forEach(function(e, f){
  var contador = f + 1;
  $(".tienda").append(
        '<div class="col-xs-6 checkbox check-uno check'+contador+'">'+
          '<div class="img-tienda tienda'+contador+'"><img src="'+e.url+'"></div>'+
          '<h6 class="titulo'+contador+'">'+e.name+'</h6>'+
          '<h5>'+e.nam+'</h5>'+
          '<h4> $'+e.price+'</h4>'+
          '<div class="row">'+
            '<div class="col-xs-6">'+
                '<label>'+
                  '<input id="accepted1" type="checkbox">Selecciona'+
                '</label>'+
            '</div>'+
            '<div class="col-xs-6">'+
                '<a href="#"><i class="fa fa-heart" aria-hidden="true"></i></a>'+
            '</div>'+
          '</div>'+
        '</div>');
})

$('#accepted1,#accepted2').click(function () {
    //aparece btn.
    $("#btn-container").removeClass('btn-comparar');
    $("#btn-container").addClass('btn-fijo');
    
    //si es check se activa btn, solo con los dos checks.
    if ($('#accepted1:checked,#accepted2:checked').length == 2){
      $('#id_complete').removeAttr('disabled');
      $("#id_complete").css({
         "background-color": "#DD0021",
         "border": "none",
         "width": "100%",
         "height": "44px"
      });
    }else{
       $('#id_complete').attr('disabled','disabled');
      $("#id_complete").css({
         "background-color": "#333333",
         "border": "none",
         "width": "100%",
         "height": "44px"
      });
      //$("#btn-container").addClass('btn-comparar');
    }
  });

  $(".btn-primary").click(function(){
    window.location.href = "comparadordos.html"
  })
  
});

/*MACA FIN*/
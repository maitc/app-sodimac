var miJSON=[{
	"url":"http://sodimac.scene7.com/is/image/SodimacCL/2844338",
	"name":"Aire acondicionado 12.000B black",
	"sku":"2844338",
	"precio":"249990",
	"modelo":"YPS-12H",
	"marca":"Wurden",
	"color":"Negro",
	"controlTemp":"Sí incluye",
	"consumo":"1,38 Kw/hr",
	"controlRem":"Sí incluye",
	"panel":"Digital",
	"timer":"Sí incluye",
	"alto":"83 cm",
	"ancho":"45 cm",
	"profundidad":"32 cm",
	"refigeracion":"12000 BTU",
	"apagadoAutom":"Sí",
	"luzEncendido":"Sí incluye",
	"garantia":"2 años",
	"termostato":"Sí incluye",
	"refigerante":"R410a",
	"procedencia":"China",
	"filtro":"Sí",
	"ubicación":"Dormitorios, Living, Comedor, Espacios Amplios",
	"peso":"33.14 kg",
	},
	{
	"url":"http://sodimac.scene7.com/is/image/SodimacCL/3093999_01",	
	"name":"Aire acondicionado 9.000B Black",
	"sku":"3093999",
	"precio":"249990",
	"modelo":"YPS-09H",
	"marca":"Wurden",
	"color":"Negro",
	"controlTemp":"Sí incluye",
	"consumo":"1,05 Kw/hr",
	"controlRem":"Sí incluye",
	"panel":"Digital",
	"timer":"Sí incluye",
	"alto":"83 cm",
	"ancho":"45 cm",
	"profundidad":"32 cm",
	"refigeracion":"9.000 BTU",
	"apagadoAutom":"No",
	"luzEncendido":"Sí incluye",
	"garantia":"2 años",
	"termostato":"Sí incluye",
	"refigerante":"R-410A",
	"procedencia":"China",
	"filtro":"Si",
	"ubicación":"Dormitorios, Living, Comedor, Espacios Amplios",
	"peso":"32.84 kg",
	}
]
$(document).ready(function(){
		$.each(miJSON, function(i,item){			
			$(".comparador").append('<div class="col-xs-6 compara-caja"><div class="comparador-img">'+
				'<img src="'+miJSON[i].url+'" alt="perrito-uno" class="center"><h6>'+miJSON[i].marca+'</h6><h5><b>'+ miJSON[i].name + '</b></h5>'+
				'<p>SKU'+ miJSON[i].sku +'</p><p><h4 class="price-color"> $'+ miJSON[i].precio +' C/U</h4></p><button class="agregarC">Agregar</button></div></div>');
			$(".marca").append('<div class="col-xs-6 text-center" id="colOne">'+'<p>'+miJSON[i].marca+'</p></div>');
			$(".modelo").append('<div class="col-xs-6 text-center" id="colOne"><p>'+ miJSON[i].modelo+'</p></div>');
			$(".alto").append('<div class="col-xs-6 text-center" id="colOne"><p>'+miJSON[i].alto+'</p></div>');
			$(".ancho").append('<div class="col-xs-6  text-center" id="colOne"><p>'+miJSON[i].ancho+'</p></div>');
			$(".profundidad").append('<div class="col-xs-6 text-center" id="colOne">'+'<p>'+miJSON[i].profundidad+'</p></div>');
			$(".consumo").append('<div class="col-xs-6 text-center" id="colOne"><p>'+miJSON[i].consumo+'</p></div></div>');
			$(".cdeTemperatura").append('<div class="col-xs-6 text-center" id="colOne"><p>'+miJSON[i].controlTemp+'</p></div></div>');
			$(".controlRem").append('<div class="col-xs-6 text-center" id="colOne"><p>'+miJSON[i].controlRem+'</p></div></div>');	
			$(".filtro").append('<div class="col-xs-6 text-center" id="colOne">'+'<p>'+miJSON[i].filtro+'</p></div></div>');
			$(".garantia").append('<div class="col-xs-6 text-center" id="colOne"><p>'+miJSON[i].garantia+'</p></div>');
			$(".procedencia").append('<div class="col-xs-6 text-center" id="colOne"><p>'+miJSON[i].procedencia+'</p></div>');	
			$(".lEncendido").append('<div class="col-xs-6 text-center" id="colOne"><p>'+miJSON[i].luzEncendido+'</p></div>');
			$(".panels").append('<div class="col-xs-6 text-center" id="colOne"><p>'+miJSON[i].panel+'</p></div>');
			$(".timer").append('<div class="col-xs-6 text-center" id="colOne"><p>'+miJSON[i].timer+'</p></div>');
			$(".peso").append('<div class="col-xs-6 text-center" id="colOne"><p>'+miJSON[i].peso+'</p></div>');
			
			})
	})
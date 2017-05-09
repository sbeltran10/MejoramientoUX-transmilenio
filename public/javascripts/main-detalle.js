$(document).ready(function () {

    for (var i = 0; i < 5; i++) {
        var itemServicio = $('<div class="item-servicio"></div>');
        var item = $('<div class="row row-imagen"><div class="col-lg-12"></div></div>');
        var iconoServicio = $('<div class="imagen-servicio"><div class="txt-servicio">B1</div></div>');
        item.append(iconoServicio);

        var inc = Math.floor(Math.random() * i) + 1;

        var infoTiempo = $('<div class="row row-tiempo"><div class="col-lg-12">Se encuentra a <span class="txt-tiempo">'+(i+1+inc)+ ' minutos</span></div></div>');
        item.append(infoTiempo);

        var rand = Math.floor(Math.random() * 4) + 1;
        console.log(rand);
        if (rand === 1) {
            var infoOcupacion = $('<div class="row row-ocupacion"><div class="col-lg-12">Tiene una ocupación <span class="nivel-ocupacion-baja">baja</span></div></div>');
            item.append(infoOcupacion);
        }
        else if (rand === 2) {
            var infoOcupacion = $('<div class="row row-ocupacion"><div class="col-lg-12">Tiene una ocupación <span class="nivel-ocupacion-media">media</span></div></div>');
            item.append(infoOcupacion);
        }
        else if (rand === 3) {
            var infoOcupacion = $('<div class="row row-ocupacion"><div class="col-lg-12">Tiene una ocupación <span class="nivel-ocupacion-alta">alta</span></div></div>');
            item.append(infoOcupacion);
        }
        else if (rand === 4) {
            var infoOcupacion = $('<div class="row row-ocupacion"><div class="col-lg-12">Tiene una ocupación <span class="nivel-ocupacion-muy-alta">muy alta</span></div></div>');
            item.append(infoOcupacion);
        }


        itemServicio.append(item);
        $("#lista-servicios").append(itemServicio);
    }

});
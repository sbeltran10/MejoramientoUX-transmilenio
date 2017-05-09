$(document).ready(function () {

    for (var i = 0; i < 5; i++) {
        var itemServicio = $('<div class="item-servicio"></div>');
        var item = $('<div class="row row-imagen"><div class="col-lg-12"></div></div>');
        var iconoServicio = $('<div id="imagen-servicio-'+i+'" class="imagen-servicio"><div id="txt-servicio-' + i + '" class="txt-servicio">B1</div></div>');
        item.append(iconoServicio);

        var inc = Math.floor(Math.random() * i) + 1;

        var infoTiempo = $('<div class="row row-tiempo"><div class="col-lg-12">Se encuentra a <span class="txt-tiempo">' + (i + 1 + inc) + ' minutos</span></div></div>');
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


        var randServicio = Math.floor(Math.random() * 6) + 1;
        if (randServicio === 1) {
            $('#txt-servicio-' + i).html("B1");
            colorservicio("B1",$('#imagen-servicio-' + i));
        }
        else if (randServicio === 2) {
            $('#txt-servicio-' + i).html("B5");
            colorservicio("B5",$('#imagen-servicio-' + i));
        }
        else if (randServicio === 3) {
            $('#txt-servicio-' + i).html("G11");
            colorservicio("G11",$('#imagen-servicio-' + i));
        }
        else if (randServicio === 4) {
            $('#txt-servicio-' + i).html("F14");
            colorservicio("F14",$('#imagen-servicio-' + i));
        }
        else if (randServicio === 5) {
            $('#txt-servicio-' + i).html("H74");
            colorservicio("H74",$('#imagen-servicio-' + i));
        }
        else if (randServicio === 6) {
            $('#txt-servicio-' + i).html("J72");
            colorservicio("J72",$('#imagen-servicio-' + i));
        }
    }

});
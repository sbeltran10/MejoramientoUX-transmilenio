$(document).ready(function () {

    for (var i = 0; i < 15; i++) {
        var itemServicio = $('<div id="item-' + i + '" class="item-servicio"></div>');
        var item = $('<div class="row row-imagen"><div class="col-lg-12"></div></div>');
        var iconoServicio = $('<div id="imagen-servicio-' + i + '" class="imagen-servicio"><div id="txt-servicio-' + i + '" class="txt-servicio">B1</div></div>');
        item.append(iconoServicio);

        var inc = Math.floor(Math.random() * (i + 1)) + 1;

        var infoTiempo = $('<div class="row row-tiempo"><div class="col-lg-12">Se encuentra a <span class="txt-tiempo">' + (i + inc) + ' minutos</span></div></div>');
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
            colorservicio("B1", $('#imagen-servicio-' + i));
        }
        else if (randServicio === 2) {
            $('#txt-servicio-' + i).html("B5");
            colorservicio("B5", $('#imagen-servicio-' + i));
        }
        else if (randServicio === 3) {
            $('#txt-servicio-' + i).html("G11");
            colorservicio("G11", $('#imagen-servicio-' + i));
        }
        else if (randServicio === 4) {
            $('#txt-servicio-' + i).html("F14");
            colorservicio("F14", $('#imagen-servicio-' + i));
        }
        else if (randServicio === 5) {
            $('#txt-servicio-' + i).html("H74");
            colorservicio("H74", $('#imagen-servicio-' + i));
        }
        else if (randServicio === 6) {
            $('#txt-servicio-' + i).html("J72");
            colorservicio("J72", $('#imagen-servicio-' + i));
        }
    }

    var itemServicio = $('<div id="item-' + 16 + '" class="item-servicio"></div>');
    var item = $('<div class="row row-imagen"><div class="col-lg-12"></div></div>');
    var iconoServicio = $('<div id="imagen-servicio-' + 16 + '" class="imagen-servicio"><div id="txt-servicio-' + 16 + '" class="txt-servicio">B1</div></div>');
    item.append(iconoServicio);

    var inc = Math.floor(Math.random() * (16 + 1)) + 1;

    var infoTiempo = $('<div class="row row-tiempo"><div class="col-lg-12">Se encuentra a <span class="txt-tiempo">' + 8 + ' minutos</span></div></div>');
    item.append(infoTiempo);

    var infoOcupacion = $('<div class="row row-ocupacion"><div class="col-lg-12">Tiene una ocupación <span class="nivel-ocupacion-muy-alta">muy alta</span></div></div>');
    item.append(infoOcupacion);


    itemServicio.append(item);
    $("#lista-servicios").append(itemServicio);

    $('#txt-servicio-' + 16).html("J24");
    colorservicio("J24", $('#imagen-servicio-' + 16));

    var itemServicio = $('<div id="item-' + 17 + '" class="item-servicio"></div>');
    var item = $('<div class="row row-imagen"><div class="col-lg-12"></div></div>');
    var iconoServicio = $('<div id="imagen-servicio-' + 17 + '" class="imagen-servicio"><div id="txt-servicio-' + 17 + '" class="txt-servicio">C15</div></div>');
    item.append(iconoServicio);

    var inc = Math.floor(Math.random() * (16 + 1)) + 1;

    var infoTiempo = $('<div class="row row-tiempo"><div class="col-lg-12">Se encuentra a <span class="txt-tiempo">' + 7 + ' minutos</span></div></div>');
    item.append(infoTiempo);

    var infoOcupacion = $('<div class="row row-ocupacion"><div class="col-lg-12">Tiene una ocupación <span class="nivel-ocupacion-baja">baja</span></div></div>');
    item.append(infoOcupacion);


    itemServicio.append(item);
    $("#lista-servicios").append(itemServicio);

    $('#txt-servicio-' + 17).html("C15");
    colorservicio("C15", $('#imagen-servicio-' + 17));


    $('#boton-filtrar').click(function (e) { e.preventDefault(); filtrar($("#filtrar-servicio").val()); return false; });
});

function filtrar(texto) {


    for (var i = 0; i < 17; i++) {
        $("#item-" + i).show();
    }

    for (var i = 0; i < 17; i++) {
        if (!$("#txt-servicio-" + i).html().startsWith(texto)) {
            console.log($("#txt-servicio-" + i).html());
            $("#item-" + i).hide();
        }
    }
}
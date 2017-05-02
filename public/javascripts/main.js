function init() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAlsI2xvG60mloyE2Ekhl_Le10W1H8NtQs",
        authDomain: "transmiapp-4bbe6.firebaseapp.com",
        databaseURL: "https://transmiapp-4bbe6.firebaseio.com",
        projectId: "transmiapp-4bbe6",
        storageBucket: "transmiapp-4bbe6.appspot.com",
        messagingSenderId: "917304301865"
    };
    firebase.initializeApp(config);

    /*
    estacion:
    activo:
    contador:
        servicio:
        contador:
    incentivo:
    general:
        servicio1:
            servicio:
            cuadras:
            minutos:
            pasajeros:
        servicio2:
            servicio:
            cuadras:
            minutos:
            pasajeros:
    */

    var activoRef = firebase.database().ref("activo");
    activoRef.on('value', function (snapshot) {
        console.log(snapshot.val());
        cambiarVista(snapshot.val());
    });

    var estacionRef = firebase.database().ref("estacion");
    estacionRef.on('value', function (snapshot) {
        console.log(snapshot.val());
        cambiarNombreEstacion(snapshot.val());
    });

    var pantallaRef = firebase.database().ref("contador");
    pantallaRef.on('value', function (snapshot) {
        console.log(snapshot.val());
        actualizarContador(snapshot.val());
    });

    var incentivoRef = firebase.database().ref("incentivo");
    incentivoRef.on('value', function (snapshot) {
        console.log(snapshot.val());
        actualizarIncentivo(snapshot.val());

    });

    var infoRef = firebase.database().ref("general");
    infoRef.on('value', function (snapshot) {
        console.log(snapshot.val());
        actualizarContadorInfoGeneral(snapshot.val());
    });
}

////
function cambiarVistaDB(nombreVista) {
    firebase.database().ref().update({ "activo": nombreVista });
}



function cambiarVista(nombreVista) {
    $("#content-contador").hide();
    $("#content-incentivo").hide();
    $("#content-info-general").hide();

    $(nombreVista).show();
}

function cambiarNombreEstacionDB() {
    var estacionNueva = $("#estacion-nombre").val();
    firebase.database().ref().set({ "estacion": estacionNueva });
}

function cambiarNombreEstacion(nombreEstacion) {
    $("#txt-estacion").html(nombreEstacion);
}

function aumentar() {
    firebase.database().ref("contador/contador").once('value', function (snapshot) {
        firebase.database().ref("contador").update({ "contador": snapshot.val() + 1 });
    })

}

function disminuir() {
    firebase.database().ref("contador/contador").once('value', function (snapshot) {
        firebase.database().ref("contador").update({ "contador": snapshot.val() - 1 });
    })
        .update({ "activo": nombreVista });
}

function actualizardatosContador() {
    var datosnuevos = {};
    datosnuevos.contador = Number($("#contador-numero").val());
    datosnuevos.servicio = $("#contador-servicio").val();
    firebase.database().ref().update({ "contador": datosnuevos });
}

function actualizarContador(valores) {
    if (valores) {
        $("#contador-pasajeros").html(valores.contador);
        var valorServicio = valores.servicio;
        $("#txt-servicio-contador").html(valorServicio);
        var servicioTexto = $("#imagen-servicio-contador");
        colorservicio(valorServicio, servicioTexto);
    }
}

function actualizarIncentivoDB() {
    var datosnuevos = {};
    datosnuevos.servicio = ($("#incentivo-servicio").val());
    datosnuevos.bonificacion = $("#incentivo-bonificacion").val();
    datosnuevos.saldo = $("#incentivo-saldo").val();
    firebase.database().ref().update({ "incentivo": datosnuevos });
}

function actualizarIncentivo(valores) {
    if (valores) {
        $("#incentivo-txt-bonificacion").html("+" + valores.bonificacion);
        $("#incentivo-txt-total").html(valores.saldo);
        $("#incentivo-servicio").html(valores.servicio);
        var valorServicio = valores.servicio;
        var servicioTexto = $("#imagen-servicio-incentivo");
        colorservicio(valorServicio, servicioTexto);
    }
}

function actualizarGeneralDB() {
    var datosnuevos = {};
    datosnuevos.servicio1 = {};
    datosnuevos.servicio2 = {};

    datosnuevos.servicio1.servicio = ($("#general-servicio1").val());
    datosnuevos.servicio1.cuadras = $("#general-cuadras1").val();
    datosnuevos.servicio1.minutos = $("#general-minutos1").val();
    datosnuevos.servicio1.pasajeros = $("#general-pasajeros1").val();

    datosnuevos.servicio2.servicio = ($("#general-servicio2").val());
    datosnuevos.servicio2.cuadras = $("#general-cuadras2").val();
    datosnuevos.servicio2.minutos = $("#general-minutos2").val();
    datosnuevos.servicio2.pasajeros = $("#general-pasajeros2").val();

    firebase.database().ref().update({ "general": datosnuevos });
}

function actualizarContadorInfoGeneral(valores) {
    if (valores) {

        $("#txt-servicio-general1").html(valores.servicio1.servicio);
        $("#distancia-general1").html(" " + valores.servicio1.cuadras + " cuadras (" + valores.servicio1.minutos + " minutos) " );
        $("#pasajeros-general1").html(" " + valores.servicio1.pasajeros + " pasajeros.");

        $("#txt-servicio-general2").html(valores.servicio2.servicio);
        $("#distancia-general2").html(" " + valores.servicio2.cuadras + " cuadras (" + valores.servicio2.minutos + " minutos) " );
        $("#pasajeros-general2").html(" " + valores.servicio2.pasajeros + " pasajeros.");

        var valorServicio = valores.servicio1.servicio;
        var servicioTexto = $("#imagen-servicio-general1");
        colorservicio(valorServicio, servicioTexto);

        var valorServicio = valores.servicio2.servicio;
        var servicioTexto = $("#imagen-servicio-general2");
        colorservicio(valorServicio, servicioTexto);
    }
}

function colorservicio(valorServicio, servicioTexto) {
    if (valorServicio.startsWith("A"))
        servicioTexto.css("background-color", "rgb(0,51,153)");
    else if (valorServicio.startsWith("B"))
        servicioTexto.css("background-color", "rgb(106,205,57)");
    else if (valorServicio.startsWith("C"))
        servicioTexto.css("background-color", "rgb(255,209,24)");
    else if (valorServicio.startsWith("D"))
        servicioTexto.css("background-color", "rgb(126,101,162)");
    else if (valorServicio.startsWith("E"))
        servicioTexto.css("background-color", "rgb(205,156,57)");
    else if (valorServicio.startsWith("F"))
        servicioTexto.css("background-color", "rgb(205,8,57)");
    else if (valorServicio.startsWith("G"))
        servicioTexto.css("background-color", "rgb(0,157,211)");
    else if (valorServicio.startsWith("H"))
        servicioTexto.css("background-color", "rgb(255,107,8)");
    else if (valorServicio.startsWith("J"))
        servicioTexto.css("background-color", "rgb(205,106,156)");
    else
        servicioTexto.css("background-color", "rgb(213,178,124)");
}



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
    activo:
    contador:
        servicio:
        contador:
    incentivo:
    info:
    */

    var activoRef = firebase.database().ref("activo");
    activoRef.on('value', function (snapshot) {
        console.log(snapshot.val());
        cambiarVista(snapshot.val());
    });

    var pantallaRef = firebase.database().ref("contador");
    pantallaRef.on('value', function (snapshot) {
        console.log(snapshot.val());
        actualizarContador(snapshot.val());
    });

    var incentivoRef = firebase.database().ref("incentivo");
    incentivoRef.on('value', function (snapshot) {
        console.log(snapshot.val());

    });

    var infoRef = firebase.database().ref("info");
    infoRef.on('value', function (snapshot) {
        console.log(snapshot.val());

    });
}

function cambiarVistaDB(nombreVista) {
    firebase.database().ref().set({ "activo": nombreVista });
}

function cambiarVista(nombreVista) {
    $("#content-contador").hide();
    $("#content-incentivo").hide();
    $("#content-info-general").hide();

    $(nombreVista).show();
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
}

function actualizarIncentivo(valores) {

}

function actualizarContadorInfoGeneral(valores) {

}



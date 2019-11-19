// heure de sonnerie
let debut = "8:00:00";
let pause10h = "10:30:00";
let reprise10h = "10:45:00";
let pauseMidi = "12:30:00";
let repriseMidi = "13:30:00";
let pause15h = "15:30:00";
let reprise15h= "15:45:00";
let fin = "17:00:00";

function condition() {

    let aujourdhui = new Date();
    let h = aujourdhui.getHours();
    let m = aujourdhui.getMinutes();
    let s = aujourdhui.getSeconds();

    // Message d'infos
    let infos1 = "Heure de travail";
    let infos2 = "Tu as une pause a : ";
    let infos3 = "En pause, tu reprend a : ";
    let infos4 = "Tu vas manger a : ";
    let infos5 = "C\'est l\'heure de MANGER tu reprend a : ";
    let infos6 = "Tu finis a : ";

    m = checkTime(m);
    s = checkTime(s);
    let time = h + ":" + m + ":" + s;
    $('#infos').empty();
    $('#pause').empty();

    // Cours matin avant 10h
    if (time > debut) {
        $('#infos').html('<h1>' + infos1 + '</h1>');
        $('#pause').html('<h3>' + infos2 + pause10h + '</h3>');
    }
    // Pause 10H
    else if (time >= pause10h && time <= reprise10h) {
        $('#pause').html('<h3>' + infos3 + reprise10h + '</h3>');
    }
    // Cours matin apres 10h
    else if (time > pause10h && time < pauseMidi) {
        $('#infos').html('<h1>' + infos1 + '</h1>');
        $('#pause').html('<h3>' + infos4 + pauseMidi + '</h3>');
    }
    // Pause MIDI
    else if (time > pauseMidi && time < repriseMidi) {
        $('#pause').html('<h3>' + infos5 + repriseMidi + '</h3>');
    }
    // Cours apres midi avant 15h
    else if (time > repriseMidi && time < pause15h) {
        $('#infos').html('<h1>' + infos1 + '</h1>');
        $('#pause').html('<h3>' + infos2 + pause15h + '</h3>');
    }
    else if (time >= pause15h && time <= reprise15h) {
        $('#pause').html('<h3>' + infos3 + reprise15h + '</h3>');
    }
    else if (time > reprise15h && time < fin) {
        $('#infos').html('<h1>' + infos1 + '</h1>');
        $('#pause').html('<h3>' + infos6 + fin + '</h3>');
    }
    else if (time < debut && time > fin) {
        $('#infos').html('<h1>OlaOla calme toi c\'est pas le moment la</h1>');
    }
    else if (time === debut || time === pause10h || time === pauseMidi || time === pause15h || time === reprise10h || time === repriseMidi || time === reprise15h || time === fin) {
        sonnerie();
    }
    window.setTimeout(condition, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
}

function sonnerie() {
    $('.modal-body').append(
        '<audio controls autoplay autoload id="radio">' +
            '<source src="./Nature%20-%20Son%20De%20Réveil.mp3" type="audio/mp3"/>' +
        '</audio>');
    $("#modal").modal();
    s = setTimeout(closeSonnerie,30000);
}

function closeSonnerie() {
    var player = document.getElementById('radio');
    player.pause();
    player.src = player.src;
    $('#modal').modal('hide');
}

function afficherHeure() {

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();

    let aujourdhui = new Date();
    let h = aujourdhui.getHours();
    let m = aujourdhui.getMinutes();
    let s = aujourdhui.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    $("#heure").html('<h1>'+ h +":"+ m +":"+ s +'</h1>');
    $("#date").html('<h3>'+ today.toLocaleDateString("fr-FR", options) +'</h3>');
    t = setTimeout('afficherHeure()',1000);
}
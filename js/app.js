//Script de la page d'authentification
function fApp() {
  $("#bok").click(fOk);
}
// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", function () {
//     navigator.serviceWorker.register("../ServiceWorker.js").then(
//       function (registration) {
//         // Registration was successful
//         console.log(
//           "ServiceWorker registration successful with scope: ",
//           registration.scope
//         );
//       },
//       function (err) {
//         // registration failed :(
//         console.log("ServiceWorker registration failed: ", err);
//       }
//     );
//   });
}
function fOk() {
  l = $("#login").val();
  p = $("#pwd").val();
  url = "http://ilc.tn/API/AUTHENTIFICATION/";
  url = url + "?log=" + l + "&pwd=" + p;

  $.getJSON(url, f1);
}

function f1(x) {
  if (x.etat == "ok") {
    $("#msg").html(
      '<div class="alert alert-success alert-dismissible" role="alert">  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>Redirection en cours...</div>'
    );
    window.open("./page/meteo.html", "_self");
  } else
    $("#msg").html(
      '<div class="alert alert-danger alert-dismissible" role="alert">  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>Echec d\'authentification</div>'
    );
}

//Script de la page meteo
function fAppMeteo() {
  $("#bokm").click(fAffMeteo);
}

function fAffMeteo() {
  d = $("#date").val();
  url = "http://ilc.tn/API/METEO/";
  if (d != "") {
    url = url + "?date=" + d;
  }
  $.getJSON(url, f1Meteo);
}

function f1Meteo(x) {
  $("#tb").html("");
  $.each(x, f2Meteo);
}

function f2Meteo(k, v) {
  var code = "<tr><td>" + v.ville + "</td><td>" + v.temperature + "</td></tr>";
  $("#tb").append(code);
}
//Script de la page devise
function fAppDevise() {
  $("#bokd").click(fAffDevise);
}

function fAffDevise() {
  d = $("#dev").val();
  url = "http://ilc.tn/API/DEVISE/";
  if (d != "") {
    url = url + "?nom=" + d;
  }
  alert(url);
  $.getJSON(url, f1Devise);
}

function f1Devise(x) {
  $("#tb").html("");
  $.each(x, f2Devise);
}

function f2Devise(k, v) {
  if (v.vala == v.valh) {
    var etat =
      '<span class="danger glyphicon glyphicon-minus" aria-hidden="true"></span>';
  } else if (v.vala > v.valh) {
    var etat =
      '<span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span>';
  } else {
    var etat =
      '<span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span>';
  }
  var code =
    "<tr><td>" +
    v.nom +
    "</td><td>" +
    v.valh +
    "</td><td>" +
    v.vala +
    "</td><td>" +
    etat +
    "</td></tr>";
  $("#tb").append(code);
}

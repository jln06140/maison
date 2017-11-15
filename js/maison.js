$(document).ready(function () {
    $('select').material_select();
    $('.parallax').parallax();
    $('.slider').slider();
    $('.carousel').carousel();
    $('.materialboxed').materialbox();
    $(".button-collapse").sideNav();

});

function calculPrix() {
    // document.getElementById("erreur").style.display = "block";
    var nbPersonnes = document.getElementById("nombredepersonnes").value;
    var nuitee = document.getElementById("nuitees").value;
    var message = document.getElementById("erreur").innerHTML;
    var total =0;
    alert(nbPersonnes);

    if (nbPersonnes == "" || nuitee == "") {
        afficherDivErreur();
        var erreurs="";
        if (nbPersonnes == "") {
            erreurs += '<p>Renseigner nombre de personne</p>';
        }
        if (nuitee == "") {
            erreurs += '<p>Aucune Nuit Selectionn&eacutee</p>';
        }
        message = erreurs;
    }
    else
    {
    total+= prixNuitee() + prixSelonNb() + option();
    alert(total);
    document.forms.formulaire.disabled.value = total+ " Euros";
    
    }
}

function prixSelonNb() {
    var nombrePersonnes = document.getElementById("nombredepersonnes");
    var res = 0;
    if (nombrePersonnes.value > "1") {
        res = (nombrePersonnes.value-1) * 10;
    }
    return (res);


}

function afficherDivErreur() {
    
    if(document.getElementById("erreur").className == "erreurCache"){
        document.getElementById("erreur").className = "erreurAffiche";
    }
    else{
        document.getElementById("erreur").className = "erreurCache";
    }
    
}

function prixNuitee() {
    var nuit = 50;
    var res = 50;
    var nombre = document.getElementById('nuitees').selectedIndex;
    for (var i = 1; i < nombre; i++) {
        nuit = nuit * 0.9;
        res = res + nuit;

    }
    return res;
}



function option() {
    var formulaire = document.getElementById("formulaire"); // ciblage du formulaire
    var inputForm = formulaire.getElementsByTagName("input"); // récupération de TOUS les éléments de type input du formulaire
    var n;
    var res = 0;

    n = inputForm.length;
    for (i = 0; i < n; i++) {
        if (inputForm[i].type.toLowerCase() == "checkbox") // si c'est une case à cocher
        {
            if (inputForm[i].checked) {
                if (inputForm[i].value.toLocaleLowerCase() == "animal") // case cochée
                {
                    res += 10;
                }
                if (inputForm[i].value.toLocaleLowerCase() == "parking") // case cochée
                {
                    res += 15;
                }
                if (inputForm[i].value.toLocaleLowerCase() == "fumeur") // case cochée
                {
                    res += 5;
                }
            }
        }
    }
    return res;
}

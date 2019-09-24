//Gestion de la case Pseudo
var pseudoElt = document.getElementById("pseudo");
pseudoElt.addEventListener("focus", function(){
	document.getElementById("aidePseudo").textContent = "Veuillez saisir votre pseudo";
});
pseudoElt.addEventListener("blur", function(){
	document.getElementById("aidePseudo").textContent = " ";
});

//Gestion de la case mot de passe
var mdpElt = document.getElementById("mdp");
mdpElt.addEventListener("focus", function(){
	document.getElementById("aideMdp").textContent = "Veuillez saisir le mot de passe";
});
mdpElt.addEventListener("blur", function(){
	document.getElementById("aideMdp").textContent = " ";
});

//Gestion de la case courriel
var courrrielElt = document.getElementById("courriel");
courrrielElt.addEventListener("focus", function(){
	document.getElementById("aideCourriel").textContent = "Veuillez saisir votre adresse mail";
});
courrrielElt.addEventListener("blur", function()
{
	document.getElementById("aideCourriel").textContent = " ";
});

//Gestion de la case checkbox
var confirm = document.getElementById("confirmation");
confirm.addEventListener('change', function(e) {
	console.log("Demande de confirmation" + e.target.checked);
});
// Gestion des boutons radio
var abonnement = document.getElementsByName("abonnement")

	for (var i = 0; i < abonnement.length; i++) {
		abonnement[i].addEventListener("change", function(e)
		{
			console.log("Case cocher: " + e.target.value);
		});
	}

// Gestion de la liste déroulante
var nationalite = document.getElementById('nationalite');
nationalite.addEventListener('change', function(e)
	{
		console.log('Nationalité : ' + e.target.value);
	});

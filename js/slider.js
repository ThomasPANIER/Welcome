//déclarer images
const images = [
    "img/attestation_suivi_securite.png",
    "img/certificat_comprendre_le_web.png",
    "img/certificat_wordpress.png",
    "img/certificat_html5_css3.png",
    "img/Certificat_LeFonctionnementDesAlgorithmes.png",
    "img/Certificat_ProgrammerAvecJavaScript.png"
];

//déclarer descriptions
const descriptions = [
    "Attestation de suivi MOOC sur la sécurité informatique",
    "Certificat de réussite: Comprendre le Web",
    "Certificat de réussite: WordPress 5",
    "Certificat de réussite: Créer votre site web avec HTML5 et CSS3",
    "Certificat de réussite: Découvrez le fonctionnement des algorithmes",
    "Certificat de réussite: Apprenez à programmer avec JavaScript"
];

var maxIndex = images.length - 1;

//récupérer image et description du document html
var imageContainer = document.getElementById("images");
var description = document.getElementById("descriptions");

//faire correspondre image et description dans l'index
function setCurrentContent() {
    imageContainer.src = images[currentIndex];
    description.innerHTML = descriptions[currentIndex];
}

function setIndex() {
    currentIndex < maxIndex ? currentIndex +=1 : currentIndex = 0;
    setCurrentContent();
}

//selectionner la première image et description, selectionner l'intervalle de temps(4s)
var currentIndex = 0;
    setCurrentContent();

var sliderTurn = setInterval(setIndex, 4000);

//fonction du boutton gauche et droit
function action(click = false) {
    clearInterval(sliderTurn);
    click === true ? (currentIndex < maxIndex ? currentIndex ++ : currentIndex = 0) : (currentIndex > 0 ? currentIndex -- : currentIndex = maxIndex);
    setCurrentContent();
    sliderTurn = setInterval(setIndex, 4000);
}
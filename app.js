var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector('#output');
console.log(txtInput);

var serverURL = "https://api.funtranslations.com/translate/pirate.json";

function getTranlationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("Error occured!", error);
    alert("Something wrong with server! Try again after sometime");
};

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranlationURL(inputText))
        .then(Response => Response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);
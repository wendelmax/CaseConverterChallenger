String.prototype.toProperCase = function () {
    return this.split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

String.prototype.toSentenceCase = function () {
    return this.split('. ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('. ');
}

let textarea = document.querySelector("textarea");
let upperCase = document.querySelector("#upper-case");
let lowerCase = document.querySelector("#lower-case");
let properCase = document.querySelector("#proper-case")
let sentenceCase = document.querySelector("#sentence-case");
let saveTextFile = document.querySelector("#save-text-file");

upperCase.addEventListener("click", function () {
    textarea.value = textarea.value.toUpperCase();
});

lowerCase.addEventListener('click', function (){
    textarea.value = textarea.value.toLowerCase();
})

properCase.addEventListener("click", function () {
    textarea.value =textarea.value.toProperCase();
})

sentenceCase.addEventListener("click", function () {
    textarea.value =textarea.value.toSentenceCase();
})

saveTextFile.addEventListener("click", ()=>download("text.txt",textarea.value));

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

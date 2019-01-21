let showSecret = false;

updateSecretPraagraph();

//add event listener to the secret button
secretBtn.addEventListener('click', function () {
    showSecret = !showSecret;
    updateSecretBtn();
    updateSecretPraagraph();
})

//create afunction  to hide the secret paragraph
function updateSecretPraagraph() {
    if (showSecret) {
        secretparagraph.style.display = 'block';
    }
    else {
        secretparagraph.style.display = 'none';
    }
}

//create a function to update the button from show the secret to the secret
function updateSecretBtn() {
    if (showSecret) {
        secretBtn.innerText = "Hide the secret"
    } else {
        secretBtn.innerText = "Show the secret"
    }

}
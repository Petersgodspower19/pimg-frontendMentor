let errorMessage = document.getElementById('error-message');
let submitBtn = document.getElementById('submit');
let inputField = document.getElementById('email'); 

submitBtn.addEventListener("click", () => {
    let input = inputField.value;
    if (input === "" || input.length < 13){
        errorMessage.style.display = "block";
        inputField.style.borderColor = "hsl(354, 100%, 66%)";
    } else {
        errorMessage.style.display = "none";
    }
});

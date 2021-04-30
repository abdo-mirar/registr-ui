window.addEventListener("load", (event) => {
    Array.from(document.getElementsByClassName("form-input")).forEach(input => {
        input.addEventListener("focusin", event => {
            event.target.parentElement.classList.add("form-focused");
            event.target.parentElement.classList.add("form-input-full");
        });
        input.addEventListener("focusout", event => {
            if (!event.target.value)
                event.target.parentElement.classList.remove("form-input-full");
            event.target.parentElement.classList.remove("form-focused");
        });
    });
    Array.from(document.getElementsByClassName("form-icon")).forEach(eye => {
        eye.addEventListener("click", event => {
            var input = eye.parentElement.getElementsByClassName("form-control")[0];
            var ieye = eye.getElementsByTagName("i")[0];
            if (input.type == "text") {
                input.type = "password";
                ieye.classList.remove("fa-eye-slash");
                ieye.classList.add("fa-eye");
            }
            else {
                input.type = "text";
                ieye.classList.remove("fa-eye");
                ieye.classList.add("fa-eye-slash");
            }
        });
    });
});
//validation
function validate() {
    var ipassword = document.getElementById("mod_pass");
    var icpassword = document.getElementById("mod_pass_confirmer");
    var iconditions = document.getElementById("conditions");
    var valid = true;
    if (!ipassword.value || ipassword.value != icpassword.value)
        valid = false;
    if (!iconditions.checked)
        valid = false;
    return valid;
}
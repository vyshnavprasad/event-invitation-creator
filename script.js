const invitationForm = document.getElementById("invitation-form");
const invitationFormSubmit = document.getElementById("invitation-form-submit");
const formValidationDialog = document.getElementById("form-validation-dialog")
const formValidationDialogClose = document.getElementById("form-validation-dialog-close")

invitationFormSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    // Get Form-data
    
    const formData = new FormData(invitationForm);
    const formDataObject = Object.fromEntries(formData.entries());
    
    // Form Validation and Submition
    if (Array.from(formData.entries()).reduce((a, c) => 
            a & (c[1].length>0), true)) {

        document.querySelector('#card-event-name').textContent = formDataObject['event-name'];
        document.querySelector('#card-location').textContent = formDataObject['location'];
        document.querySelector('#card-day-date').textContent = "";
        document.querySelector('#card-time').textContent = 
            formDataObject['start-time'] + " + " + formDataObject['end-time'];
        document.querySelector('#card-location').textContent = formDataObject['location'];
        document.querySelector('#card-description').textContent = formDataObject['event-description'];

        document.querySelector('#input-form').style.display = "none";
        document.querySelector('#invitation-card').style.display = "block";

        document.querySelector('#body').style.background = "white";
    } else formValidationDialog.showModal();
})
    
formValidationDialogClose.addEventListener("click", () => formValidationDialog.close())
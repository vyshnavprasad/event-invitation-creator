const invitationForm = document.getElementById("invitation-form");
const invitationFormSubmit = document.getElementById("invitation-form-submit");
const formValidationDialog = document.getElementById("form-validation-dialog")
const formValidationDialogClose = document.getElementById("form-validation-dialog-close")

invitationFormSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    // Get Form-data
    const formData = new FormData(invitationForm);
    
    // Form Validation and Submition
    if (Array.from(formData.entries()).reduce((a, c) => 
            a & (c[1].length>0) , true)) {

        document.querySelector('#card-event-name').textContent = formData.get('event-name');
        document.querySelector('#card-location').textContent = formData.get('location');
        document.querySelector('#card-day-date').textContent = 
            new Date(formData.get('event-date')).toDateString();
        document.querySelector('#card-time').textContent = 
            formData.get('start-time') + " + " + formData.get('end-time');
        document.querySelector('#card-location').textContent = formData.get('location');
        document.querySelector('#card-description').textContent = formData.get('event-description');

        document.querySelector('#input-form').style.display = "none";
        document.querySelector('#invitation-card').style.display = "block";

        document.querySelector('#body').style.background = "lightgray";
    } else formValidationDialog.showModal();
})
    
formValidationDialogClose.addEventListener("click", () => formValidationDialog.close())
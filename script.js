const invitationForm = document.getElementById("invitation-form");
const invitationFormSubmit = document.getElementById("invitation-form-submit");
const formValidationDialog = document.getElementById("form-validation-dialog")
const formValidationDialogClose = document.getElementById("form-validation-dialog-close")

invitationFormSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    
    // Form Validation
    const formData = new FormData(invitationForm)
    if (Array.from(formData.entries()).reduce((a, c) => 
        a & (c[1].length>0)
    , true)) {
    } else formValidationDialog.showModal();
})
    
formValidationDialogClose.addEventListener("click", () => formValidationDialog.close())
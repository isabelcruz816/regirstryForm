$(document).ready(function watchForm() {
    $("#submitButton").click(function () {
        event.preventDefault();

        // Validate the full name input
        const fullNameErrorMessage = $("#fullNameErrorMessage");
        if ($("#fullName").val() === "") {
            $(fullNameErrorMessage).text("Please provide your name");
        }
        else {
            $(fullNameErrorMessage).text("");
        }

        // Validate the email input
        const emailErrorMessage = $("#emailErrorMessage");
        if ($("#email").val() === "") {
            $(emailErrorMessage).show();
        }
        else {
            $(emailErrorMessage).hide();
        }

        // Validate dropdown countries menu
        const countryErrorMessage = $("#countryErrorMessage");
        if ($("#country").val() === "0") {
            $(countryErrorMessage).text("Please select a country");
        }
        else {
            $(countryErrorMessage).text("");
        }

        // Validate gender inputs
        const genderRadios = $('input[name = gender]');
        const genderErrorMessage = $("#genderErrorMessage");
        let radioFlag = false;

        genderRadios.each(function () {
            if ($(this).prop("checked")) {
                radioFlag = !radioFlag;
            }
        })
        if (!radioFlag) {
            $(genderErrorMessage).text("Please select a gender");
        }
        else {
            $(genderErrorMessage).text("");
        }
    });
})
function validateForm() {
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let country = document.getElementById("country").value;
    let comments = document.getElementById("comments").value;

    if (name.trim() == "" || email.trim() == "" || country.trim() == "" || comments.trim() == "") {
        alert("Please fill in all fields");
        return false;
    }

    alert("Form submitted successfully!");
    return false;
}

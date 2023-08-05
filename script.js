// Handle the form submissions for Personal Information, Education, and Experience sections

document.getElementById("personalInfoForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const summary = document.getElementById("summary").value;

    // Save the form data to the server or local storage
    // Example: Send the data to a backend API using fetch() or save it to local storage
});

document.getElementById("educationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    // Get the education form data and save it to the server or local storage
});

document.getElementById("experienceForm").addEventListener("submit", function (event) {
    event.preventDefault();
    // Get the experience form data and save it to the server or local storage
});

// Add event listeners and form submissions for other sections if needed
// ... Existing code ...

document.getElementById("educationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const educationDegree = document.getElementById("educationDegree").value;
    const educationInstitution = document.getElementById("educationInstitution").value;
    const educationDate = document.getElementById("educationDate").value;

    // Save the education form data to the server or local storage
    // Example: Send the data to a backend API using fetch() or save it to local storage
});

document.getElementById("experienceForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const experiencePosition = document.getElementById("experiencePosition").value;
    const experienceCompany = document.getElementById("experienceCompany").value;
    const experienceDate = document.getElementById("experienceDate").value;

    // Save the experience form data to the server or local storage
    // Example: Send the data to a backend API using fetch() or save it to local storage
});

// ... Existing code ...

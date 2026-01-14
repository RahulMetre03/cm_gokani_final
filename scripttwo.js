document.querySelectorAll(".socials img").forEach(img => {
    img.addEventListener("mouseenter", () => {
        img.src = img.getAttribute("data-hover"); // Change to hover image
    });

    img.addEventListener("mouseleave", () => {
        img.src = img.getAttribute("data-original"); // Revert to original image
    });
});

document.querySelectorAll(".socials1 img").forEach(img => {
    img.addEventListener("mouseenter", () => {
        img.src = img.getAttribute("data-hover"); // Change to hover image
    });

    img.addEventListener("mouseleave", () => {
        img.src = img.getAttribute("data-original"); // Revert to original image
    });
});

function submitForm() {
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        body: document.getElementById("body").value
    };

    console.log("Form Data:", formData);

    alert(
        `Details Entered:\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nBody: ${formData.body}`
    );
    nameField.value = "";
    emailField.value = "";
    subjectField.value = "";
    bodyField.value = "";
}


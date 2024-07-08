document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("contactForm");
    var btn = document.getElementById("contactButton");
    var heroBtn = document.getElementById("heroContactButton");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    heroBtn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.getElementById("contactFormElement").onsubmit = function(event) {
        event.preventDefault();
        console.log({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        });
        alert("Información enviada correctamente!");
        modal.style.display = "none";
    }
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

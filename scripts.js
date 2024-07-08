document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("contactForm");
    var btn = document.getElementById("contactButton");
    var heroBtn = document.getElementById("heroContactButton");
    var span = document.getElementsByClassName("close")[0];
    var cancelBtn = document.getElementsByClassName("cancel")[0];

    function closeModal() {
        modal.style.display = "none";
    }

    btn.onclick = function() {
        modal.style.display = "block";
    }

    heroBtn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = closeModal;
    cancelBtn.onclick = closeModal;

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }

    document.getElementById("contactFormElement").onsubmit = function(event) {
        event.preventDefault();
        var formData = new FormData(this);

        fetch('api/send_form', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert("Información enviada correctamente!");
            closeModal();
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Hubo un error al enviar la información. Por favor, inténtalo de nuevo.");
        });
    }
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

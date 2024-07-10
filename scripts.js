document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("contactForm");
    var btn = document.getElementById("contactButton");
    var heroBtn = document.getElementById("heroContactButton");
    var span = document.getElementsByClassName("close")[0];
    var cancelBtn = document.getElementsByClassName("cancel")[0];
    var submitBtn = document.querySelector("button[type='submit']");

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
        const honeypot = event.target.honeypot.value;
        if (honeypot) {
            // If honeypot is filled out, stop the form submission and deactivate the button
            event.preventDefault();
            submitBtn.disabled = true;
            return false;
        }

        event.preventDefault();

        const form = event.target;
        const data = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(response => {
            if (response.ok) {
                alert("Gracias! Tu mensaje ha sido enviado.");
                closeModal();
            } else {
                alert("Hubo un error al enviar la información. Por favor, inténtalo de nuevo.");
            }
        }).catch(error => {
            console.error('Error:', error);
            alert("Hubo un error al enviar la información. Por favor, inténtalo de nuevo.");
        });
    };
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('¡Gracias por contactarnos! Te responderemos pronto.');
        // Here you could integrate with a backend like EmailJS or Formspree for real email sending.
        this.reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Simple animation for CTA button
document.querySelector('.cta-btn').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.05)';
});
document.querySelector('.cta-btn').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

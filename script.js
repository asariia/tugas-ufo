// Smooth Scroll Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission for validation

    const name = document.querySelector('input[placeholder="Nama"]');
    const email = document.querySelector('input[placeholder="Email"]');
    const message = document.querySelector('textarea[placeholder="Pesan"]');

    if (name.value === '' || email.value === '' || message.value === '') {
        alert('Harap mengisi semua bidang sebelum mengirim pesan!');
    } else if (!validateEmail(email.value)) {
        alert('Harap masukkan alamat email yang valid!');
    } else {
        alert('Pesan berhasil dikirim!');
        // Simulate form submission
        e.target.submit();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

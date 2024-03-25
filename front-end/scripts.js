// Galeri resimlerini seçme
const galleryImages = document.querySelectorAll('.gallery-container img');

// Alt resmi güncelleme
function updateSelectedImage(event) {
    const selectedImage = document.getElementById('selected-image');
    selectedImage.src = event.target.src;
}

// Her galeri resminin tıklanma olayını dinleme
galleryImages.forEach(image => {
    image.addEventListener('click', updateSelectedImage);
});
// Fotoğrafa tıkladığında modal içeriğini güncelleme
document.querySelectorAll('.gallery-container img').forEach(img => {
    img.addEventListener('click', function() {
        const modalTitle = document.querySelector('.modal-title');
        modalTitle.textContent = this.getAttribute('data-title');
        const modalImg = document.querySelector('.modal-body img');
        modalImg.src = this.src;
    });
});

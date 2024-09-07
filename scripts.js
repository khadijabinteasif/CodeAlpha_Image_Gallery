document.querySelectorAll('.gallery-image').forEach(image => {
    image.addEventListener('click', function() {
        openModal(this);
    });
});

var modal = document.getElementById("imageModal");
var modalImage = document.getElementById("modalImage");
var captionText = document.getElementById("imageCaption");
var thumbnailContainer = document.querySelector(".thumbnail-container");
var span = document.getElementsByClassName("close")[0];

function openModal(selectedImage) {
    modal.style.display = "flex";
    modalImage.src = selectedImage.src;
    captionText.innerHTML = selectedImage.alt;

    thumbnailContainer.innerHTML = '';
    document.querySelectorAll('.gallery-image').forEach(image => {
        if (image !== selectedImage) {
            let thumbnail = document.createElement("img");
            thumbnail.src = image.src;
            thumbnail.alt = image.alt;
            thumbnail.addEventListener('click', function() {
                modalImage.src = this.src;
                captionText.innerHTML = this.alt;
            });
            thumbnailContainer.appendChild(thumbnail);
        }
    });
}

span.onclick = function() {
    modal.style.display = "none";
}

document.getElementById('searchInput').addEventListener('input', function() {
    let searchValue = this.value.toLowerCase();
    let galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        let imageTitle = item.getAttribute('data-title').toLowerCase();
        if (imageTitle.includes(searchValue)) {
            item.style.display = 'block';
            openModal(item.querySelector('img'));
        } else {
            item.style.display = 'none';
        }
    });
});

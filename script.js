// Sources for images - an array of objects, each containing the source (src),
// high-definition source (hdSrc), and caption for an image.*/
const images = [
    { src: 'images/image1.jpg', hdSrc: 'images/image1.jpg', caption: 'Black fabric' },
    { src: 'images/image2.jpg', hdSrc: 'images/image2.jpg', caption: 'Another black fabric ' },
    { src: 'images/image3.jpg', hdSrc: 'images/image3.jpg', caption: 'More black fabric ' },
    { src: 'images/image4.jpg', hdSrc: 'images/image4.jpg', caption: 'Hot pink fabric ' },
    { src: 'images/image5.jpg', hdSrc: 'images/image5.jpg', caption: 'pink plastic material ' },
    { src: 'images/image6.jpg', hdSrc: 'images/image6.jpg', caption: 'Salmon fabric ' },
    { src: 'images/image7.jpg', hdSrc: 'images/image7.jpg', caption: 'Brown fabric ' },
    { src: 'images/image8.jpg', hdSrc: 'images/image8.jpg', caption: 'Orange fabrique ' },
    { src: 'images/image9.jpg', hdSrc: 'images/image9.jpg', caption: 'Silver fabric ' },
    { src: 'images/image10.jpg', hdSrc: 'images/image10.jpg', caption: 'Another salmon fabric ' },
    { src: 'images/image11.jpg', hdSrc: 'images/image11.jpg', caption: 'Baby blue ' },
    { src: 'images/image12.jpg', hdSrc: 'images/image12.jpg', caption: 'Caption ' },

];

//loads DOM content before executing the the script
document.addEventListener('DOMContentLoaded', () => {
        // Selects HTML elements by  ID.
    const gallery = document.getElementById('gallery');
    const overlay = document.getElementById('overlay');
    const hdImage = document.getElementById('hdImage');
    const caption = document.getElementById('caption');

    // Dynamically add images to the gallery
        // Loops through each image i
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.setAttribute('data-hd-src', image.hdSrc);
        imgElement.setAttribute('alt', image.caption);
        gallery.appendChild(imgElement);
    });


    //image display with overlay
    // Add a click event listener to the gallery.
    gallery.addEventListener('click', event => {
        if (event.target.tagName === 'IMG') {
            hdImage.src = event.target.getAttribute('data-hd-src');
            caption.textContent = event.target.alt;
            overlay.style.display = 'flex';
        }
    });

    // Event to hide overlay
    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
});

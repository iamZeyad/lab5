function createImgElement(photoUrl){
    const imgElem= document.createElement('img')
    imgElem.src = photoUrl
    return imgElem
}
//handle button
function addPhoto() {
    const photoUrl = prompt('enter the URL of the photo')
    const imgElem = createImgElement(photoUrl)
    addPhotoToGallery(imgElem)
}

function addDeletebtn() {

}

function addPhotoToGallery(img){
    const photoGalleryDiv = document.getElementById('photo_gallery')
    photoGalleryDiv.appendChild(img)
}

const addPhotoBtn = document.getElementById('add_photo')
addPhotoBtn.addEventListener('click', addPhoto)
import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIcon from './img/svg/error.svg';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchingForm = document.querySelector('.searching-form');
const gallery = document.querySelector('.gallery');
const container = document.querySelector('.container');

searchingForm.addEventListener('submit', requestImages);

// =================== Функція запиту на сервер ===================

function requestImages(event) {
  event.preventDefault();
  addLoading();
  const searchTitles = event.currentTarget.elements.searching.value;
  const searchingOptions = new URLSearchParams({
    key: '41547319-253ef689baf3db6007ef0d5b5',
    q: `${searchTitles}`,
    orientation: 'horizontal',
    per_page: 9,
    image_type: 'photo',
    safesearch: true,
  });
  fetch(`https://pixabay.com/api/?${searchingOptions}`)
    .then(response => {
      return response.json();
    })
    .then(api => {
      const imagesArray = api.hits;
      if (imagesArray.length === 0) {
        searchingForm.reset();
        izitoast.error({
          title: '',
          message: `Sorry, there are no images matching <br> your search query. Please try again!`,
          iconUrl: `${errorIcon}`,
          backgroundColor: '#EF4040',
          titleColor: '#fff',
          close: false,
          messageColor: '#fff',
          messageSize: '16px',
          progressBarColor: '#B5EA7C',
          position: 'topRight',
        });
        throw new Error('Error fetching data');
      }
      galleryCreation(imagesArray);
      removeLoading();
    })
    .catch(error => console.log(error));
}

// =================== Функція створення галереї ===================

function galleryCreation(imagesArray) {
  gallery.innerHTML = '';
  const markup = imagesArray
    .map(image => {
      return `<li class="gallery-item"><div class='image-wrapper'>
  <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      alt="${image.tags}"
      width="360"
      height="200"
    />
    </a>
    <div class="gallery-item-description">
<ul class='gallery-item-description-list'>
<li class='description-list-item'>
<p class='description'>Likes</p>
<p class='quantity'>${image.likes}</p>
</li>
<li class='description-list-item'>
<p class='description'>Views</p>
<p class='quantity'>${image.views}</p>
</li>
<li class='description-list-item'>
<p class='description'>Comments</p>
<p class='quantity'>${image.comments}</p>
</li>
<li class='description-list-item'>
<p class='description'>Downloads</p>
<p class='quantity'>${image.downloads}</p>
</li>
</ul>
    </div>
    </div>
</li>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    className: 'lightbox-on',
  });
  searchingForm.reset();
}
// =================== Функція додавання спінера ===================

function addLoading() {
  container.insertAdjacentHTML('afterbegin', '<span class="loader"></span>');
}

// =================== Функція видалення спінера ===================

function removeLoading() {
  const loader = document.querySelector('.loader');
  loader.remove();
}

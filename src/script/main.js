import './component/app-bar.js';
import './component/slider-album.js';
import albums from './component/albums.js';

window.addEventListener('load', ()=> {
    const main = document.querySelector('main');

    const sliderAlbumElement = document.createElement('slider-item');
    sliderAlbumElement.albums = albums;
    main.appendChild(sliderAlbumElement);
})


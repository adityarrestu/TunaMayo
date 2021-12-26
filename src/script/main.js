import './component/app-bar.js';
import './component/slider-album.js';
import albums from './component/albums.js';

const main = document.querySelector("main");
const slider = document.createElement("slider-album");
slider.albums = albums;
main.appendChild(slider);

console.log(albums);

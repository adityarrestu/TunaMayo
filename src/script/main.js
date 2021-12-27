import './component/app-bar.js';
import './component/slider-album.js';
import './component/content-scroll.js';
import albums from './component/albums.js';
import featuredAlbums from './component/featured-album.js';

const main = document.querySelector("main");
const slider = document.createElement("slider-album");
slider.albums = featuredAlbums;
main.appendChild(slider);

const contentScroll = document.createElement("content-scroll");
contentScroll.albums = featuredAlbums;
main.appendChild(contentScroll);

const contentScrollNew = document.createElement("content-scroll");
contentScrollNew.albums = albums;
main.appendChild(contentScrollNew);
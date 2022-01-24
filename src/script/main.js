import './component/app-bar.js';
import './component/slider-album.js';
import './component/content-scroll.js';
import './component/grid-content.js';
import './component/filter-tag.js';
import './component/carousel-album.js'
import './component/play-media.js';
import './component/footer-bar.js';
import albums from './collection/albums.js';
import featuredAlbums from './collection/featured-album.js';

const main = document.querySelector("main");

// app bar
const appBar = document.createElement("app-bar");

// carousel home page
const carousel = main.querySelector(".carousel-slider");

// content home page
const content = main.querySelector(".content");

// slider for carousel home page
const slider = document.createElement("slider-album");
slider.albums = featuredAlbums;
carousel.appendChild(slider);

// content scroll for content in home page
const contentScroll = document.createElement("content-scroll");
contentScroll.albums = featuredAlbums;
contentScroll.title = "Baru Tayang";
content.appendChild(contentScroll);

const contentScrollNew = document.createElement("content-scroll");
contentScrollNew.albums = albums;
contentScrollNew.title = "Populer";
content.appendChild(contentScrollNew);

// tag filter in home page
const filterTag = document.createElement("filter-tag");
content.appendChild(filterTag);

// album description page
const albumPage = document.createElement("carousel-album");
main.appendChild(albumPage);

// video player page
const playMedia = document.createElement("play-media");
main.appendChild(playMedia);

// remove
function hiddenChildElement() {
    carousel.classList.add("hidden");
    content.classList.add("hidden");
}

function showChildElement() {
    carousel.classList.remove("hidden");
    content.classList.remove("hidden");
}

// route to home page
export function routeHome() { 
    albumPage.classList.add("hidden") || playMedia.classList.add("hidden");
    
    showChildElement();
}

// route to album page
export async function routeAlbum(album) {
    hiddenChildElement();

    albumPage.albums = album;
    albumPage.classList.remove("hidden");
}

// route to media player page
export async function routePlay(album, episode) {
    hiddenChildElement();
    albumPage.classList.add("hidden");
    
    playMedia.albums = album; 
    playMedia.episodes = episode;
    playMedia.classList.remove("hidden");
}

routeHome();
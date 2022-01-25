import './component/app-bar.js';
import './component/slider-album.js';
import './component/content-scroll.js';
import './component/grid-content.js';
import './component/filter-tag.js';
import './component/carousel-album.js'
import './component/play-media.js';
import './component/footer-bar.js';
import './component/nav-bottom.js';
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
playMedia.classList.add("hidden");

// nav bottom
const navBottom = document.createElement("nav-bottom");
main.appendChild(navBottom);

// content not available alert
const contentAlert = document.createElement("div");
contentAlert.classList.add("content-alert");
contentAlert.textContent = "Maaf, fitur ini hanya pemanis";
main.appendChild(contentAlert);

// content not available pop up timer
let timerPopUp;
const popUp = () => {
    timerPopUp = setTimeout(() => {
        contentAlert.classList.remove("show-alert");
    }, 2200);
}

// scroll to top of page function
function topScroll() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

// hidden home page function
function hiddenChildElement() {
    carousel.classList.add("hidden");
    content.classList.add("hidden");
}

// show home page function
function showChildElement() {
    carousel.classList.remove("hidden");
    content.classList.remove("hidden");
}

// route to home page function
export function routeHome() {
    // stop video player
    if (playMedia.className !== "hidden") {
        const videoPlayer = playMedia.shadowRoot.getElementById("video-player");
        videoPlayer.setAttribute("src", '');
    }

    topScroll();

    // hidden album page or media player page
    albumPage.classList.add("hidden") || playMedia.classList.add("hidden");
    
    showChildElement();
}

// route to album page function
export async function routeAlbum(album) {
    hiddenChildElement();

    topScroll();

    albumPage.albums = album;
    albumPage.classList.remove("hidden");
}

// route to media player page function
export async function routePlay(album, episode) {
    hiddenChildElement();
    albumPage.classList.add("hidden");

    topScroll();
    
    playMedia.albums = album; 
    playMedia.episodes = episode;
    playMedia.classList.remove("hidden");
}

// content not available alert function
export function notAvailable() {
    clearTimeout(timerPopUp);

    contentAlert.classList.add("show-alert");
    
    popUp();
}

// test function
window.onpopstate = () => {
    popUp();
}

routeHome();
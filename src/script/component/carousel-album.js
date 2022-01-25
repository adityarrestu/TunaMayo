import albums from "../collection/albums.js";
import { notAvailable, routePlay } from "../main.js";

class CarouselAlbum extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    set albums(albums) {
        this._albums = albums;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <link rel="stylesheet" href="./src/style/tag-list.css">
            <link rel="stylesheet" href="./src/style/button-scroll.css">
            <style>
            :host {
                position: relative;
                top: 50px;
                display: grid;
                grid-template-columns: 50% 50%;
                grid-template-rows: auto 35px auto auto;
                animation: show-album 1000ms ease-in forwards;
            }
            
            @keyframes show-album {
                0% {display: grid; opacity: 0;}
                100% {opacity: 1;}
            }
            
            .info {
                grid-column: 1;
                padding: 50px 30px 0 50px;
            }
            
            p {
                margin: 0px 4px;
                color: #FFFFFF;
            }
            
            .title {
                font-size: 30px;
                margin-bottom: 10px;
                max-height: 74px;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            
            .rate-year {
                display: flex;
                width: 100%;
                height: auto;
                align-items: center;
                margin-bottom: 10px;
            }
            
            .rating {
                color: #3E96DB;
            }
            
            .description {
                margin: 10px 5px;
                max-height: 57px;;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            
            button {
                margin: 10px 5px;
                padding: 8px 10px;
                font-family: 'Roboto', sans-serif;
                font-size: 16px;
                font-weight: 500;
                color: #ffffff;
                border: none;
                border-radius: 7px;
                cursor: pointer;
            }
            
            .play {
                background-color: #3E96DB;
            }
            
            .collection {
                background-color: #434358;
            }
            
            .banner-container {
                grid-column: 2;
                grid-row: span 2;
            }
            
            .banner {
                width: 100%;
                max-height: 380px;
            }
            
            .shadow {
                position: absolute;
                top: 0;
                right: 0;
                width: 50%;
                height: 380px;
                box-shadow: 10px -10px 30px 10px #111319 inset;
            }
            
            hr {
                z-index: 2;
                margin: 0 50px;
                border-top: .5px solid #434358;
                grid-column: span 2;
                grid-row: 3;
            }
            
            .navigation {
                grid-column: 1;
                grid-row: 2;
                margin: 0 50px;
                color: #8A8A8D;
                font-size: 18px;
            }
            
            .navigation a {
                padding: 0 4px 9px 4px;
            }
            
            .klip {
                margin-left: 15px;
            }
            
            .episode {
                color: #ffffff;
                border-bottom: 5px solid #3E96DB;
            }
            
            .content-container {
                grid-column: span 2;
                grid-row: 4;
                margin: 20px 10px 0px 10px;
                display: flex;
                align-items: center;
            }
            
            .content-scroll {
                order: 2;
                display: flex;
                flex-direction: row;
                overflow: hidden;
                scroll-behavior: smooth;
                -ms-overflow-style: 0;  
                scrollbar-width: 0; 
                -webkit-order: 2;
            }
            
            .content-scroll::-webkit-scrollbar {
                display: none;
            }
            
            .content-item {
                width: 300px;
                margin: 8px;
                display: flex;
                flex-direction: column;
                cursor: pointer;
            }
            
            .content-item img {
                object-fit: cover;
                width: 100%;
                height: 160px;
                border-radius: 8px;
            }
            
            .content-item p {
                width: inherit;
                overflow: hidden;
                text-overflow: ellipsis;
                font-weight: 400;
            }
            
            @media screen and (max-width: 600px) {
                .info {
                    padding: 20px 20px 0 20px;
                }
            
                .title {
                    font-size: 20px;
                }
            
                .rate-year {
                    font-size: 12px;
                }
            
                .description {
                    font-size: 12px;
                }
            
                button {
                    font-size: 12px;;
                }
            
                .navigation {
                    margin: 0 20px;
                    font-size: 14px;
                }
            
                hr {
                    margin: 0 20px;
                }
            
                .content-scroll {
                    width: 100%;
                    flex-direction: column;
                }
            
                .content-container {
                    justify-content: center;
                }
            
                .content-item {
                    width: 100%;
                }
            }
            
            @media screen and (max-width: 320px) {
                .content-item img {
                    height: 140px;
                    width: 95%;
                }
            }
            
            @media (min-width: 321px) and (max-width: 375px) {
                .content-item img {
                    height: 160px;
                    width: 95%;
                }
            }
            
            @media (min-width: 376px) and (max-width: 600px) {
                .content-item img {
                    height: 180px;
                    width: 95%;
                }
            }

            @media (min-width: 320px) and (max-width: 768px) {
                .content-container {
                    margin-bottom: 80px;
                }
            }
                        
            @media screen and (max-width: 1024px) {
                :host {
                    grid-template-columns: 100%;
                    grid-template-rows: auto auto 35px auto auto;
                }
                
                .banner-container {
                    grid-column: 1;
                    grid-row: 1;
                    width: 100%;
                }
            
                .info {
                    grid-column: 1;
                    grid-row: 2;
                    padding-bottom: 20px;
                }
            
                .navigation {
                    grid-column: 1;
                    grid-row: 3;
                }
            
                hr {
                    grid-row: 4;
                }
            
                .banner {
                    width: 100%;
                    max-height: 100%;
                }
            
                .content-container {
                    grid-column: 1;
                    grid-row: 5;
                }
                
                .shadow {
                    display: none;
                }
                
            }
            
            @media screen and (min-width: 601px) and (max-width: 1024px) {
                .content-item {
                    width: 270px;
                }
            }
            </style>
            
            <section class="info">
                <p class="title">${this._albums.title}</p>

                <div class="rate-year">
                    <p class="rating">&#9733; ${this._albums.rate} |</p>
                    <p class="year">${this._albums.year}</p>
                </div>
                    
                <div class="tag-list"></div>
                <p class="description">${this._albums.description}</p>

                <div class="btn-flex">
                    <button class="play">Play</button>
                    <button class="collection">Tambahkan ke Koleksi Saya</button>
                </div>
            </section>

            <section class="banner-container">
                <img class="banner" src="${this._albums.banner}">    
                <div class="shadow"></div>
            </section>
            
            <section class="navigation">
                <a class="episode">Epsiode</a>
                <a class="klip">Klip Video</a>
            </section>

            <hr>

            <section class="content-container">
                <button class="btn prev">&#8249;</button>
                <button class="btn next">&#8250;</button>

                <div class="content-scroll"></div>
            </section>
        `;

        // make tag list
        const tagList = this.shadowDOM.querySelector(".tag-list");
        this._albums.tag.forEach(tag => {
            const tagItem = document.createElement("p");
            tagItem.textContent = tag;
            tagItem.classList.add("tag");
            tagList.appendChild(tagItem);
        })

        // make content item in content scroll
        const contentScroll = this.shadowDOM.querySelector(".content-scroll");
        this._albums.episodeList.forEach(album => {
            const content = document.createElement("div");
            content.classList.add("content-item");
            content.innerHTML = `
                <a >
                    <img src="${album.banner}">
                </a>    
                <p>${this._albums.title} Episode ${album.id}</p>
            `;

            contentScroll.appendChild(content);     
        })

        // media query for scroll content value
        let mediaSmall = window.matchMedia('(max-width: 768px)');
        let mediaMid = window.matchMedia('(max-width: 1024px)');
        let mediaLarge = window.matchMedia('(min-width: 1270px');
        let scrollValue;
        let scrollOffset
        if (mediaSmall.matches) {
            scrollValue = 572;
            scrollOffset = 600;
        } else if (mediaMid.matches) {
            scrollValue = 572;
            scrollOffset = 700;
        } else if (mediaLarge.matches) {
            scrollValue = 1262;
            scrollOffset = 1300;
        }
        
        // hidden button for 4 or less content
        const buttonPrev = this.shadowDOM.querySelector(".btn.prev");
        const buttonNext = this.shadowDOM.querySelector(".btn.next");
        let mediaScroll = window.matchMedia('(min-width: 1360px)');
        if (mediaScroll.matches) {
            contentScroll.childElementCount <= 4 ?
                (buttonNext.style.opacity = 0, buttonNext.style.cursor = "default", buttonPrev.style.opacity = 0, buttonPrev.style.cursor = "default") : 
                (buttonNext.style.opacity = 1, buttonNext.style.cursor = "pointer", buttonPrev.style.opacity = 1, buttonPrev.style.cursor = "pointer");    
        }
        
        // button scroll function
        const buttons = this.shadowDOM.querySelectorAll(".btn");
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const offset = button.className === "btn next" ? scrollValue : -(scrollValue);
                contentScroll.scrollLeft += offset;

                (contentScroll.scrollLeft + offset) >= (contentScroll.scrollWidth - scrollOffset) ? 
                    (buttonNext.style.opacity = 0, buttonNext.style.cursor = "default") : (buttonNext.style.opacity = 1, buttonNext.style.cursor = "pointer");
                    
                (contentScroll.scrollLeft + offset) <= (0 + 200) ? 
                    (buttonPrev.style.opacity = 0, buttonPrev.style.cursor = "default") : (buttonPrev.style.opacity = 1, buttonPrev.style.cursor = "pointer");
            })
        })
        
        // route to play page from play button function
        const playBtn = this.shadowDOM.querySelector(".play");
        playBtn.addEventListener("click", () => {
            routePlay(this._albums, 0);
        })

        // route to play page from content item function
        const contentItem = this.shadowDOM.querySelectorAll(".content-item");
        const arrayContent = [...contentItem];
        arrayContent.forEach(content => {
            content.addEventListener("click", () => {
                routePlay(this._albums, arrayContent.indexOf(content));
            })
        })

        // not available alert trigger for collection button
        const collection = this.shadowDOM.querySelector(".collection");
        collection.addEventListener("click", () => {
            notAvailable();
        })
    }
}

customElements.define('carousel-album', CarouselAlbum);
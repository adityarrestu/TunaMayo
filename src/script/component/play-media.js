import albums from "../collection/albums.js";

class PlayMedia extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    set albums(albums) {
        this._albums = albums;
    }

    set episodes(episode) {
        this._episodes = episode;
        this.render();
    }

    render() {
        console.log(this._episodes);
        this.shadowDOM.innerHTML = `
            <link rel="stylesheet" href="./src/style/tag-list.css">
            <style>
            :host {
                position: relative;
                top: 50px;
                display: grid;
                grid-template-columns: 70% 30%;
                grid-template-rows: auto auto;
                animation: show-media 1000ms ease-in forwards;
            }
            
            @keyframes show-media {
                0% {display: grid; opacity: 0;}
                100% {opacity: 1;}
            }
            
            .info {
                grid-column: 1;
                grid-row: 2;
                padding: 20px 30px 0 50px;
            }
            
            p {
                margin: 0px 4px;
                color: #FFFFFF;
            }
            
            .title {
                font-size: 24px;
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
            }
            
            .collection {
                background-color: #434358;
            }
            
            .media-container {
                grid-column: 1;
                grid-row: 1;
                position: relative;
                margin: 30px 30px 0 50px;
                padding-bottom: 50%;
                padding-top: 25px;
                height: 0px;
            }
            
            .video-player {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
                border: none;
            }
            
            .episode {
                grid-column: 2;
                grid-row: span 3;
                border: 1px solid #434358;
                margin: 30px 50px 50px 0;
            }
            
            .episode-album {
                position: relative;
                display: flex;
                flex-direction: column;
                padding-bottom: 100%;
                padding-top: 95%;
                height: 0;
            }
            
            .episode-scroll {
                position: absolute;
                top: 0px;
                bottom: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
                overflow-x: hidden;
                overflow-y: scroll;
                scroll-behavior: smooth;
                scrollbar-color: #777 #555;
            }
            
            .episode-scroll::-webkit-scrollbar {
                width: 9px;
            }
            
            .episode-scroll::-webkit-scrollbar-thumb {
                background-color: #777;
                border-radius: 10px;
            }
            
            .episode-scroll::-webkit-scrollbar-track {
                background-color: #555;
            }
            
            .ep-list {
                margin: 0;
                padding: 10px 30px;
                background-color: #252529;
            }
            
            .episode-item {
                width: 100%;
                margin: 5px;
                padding: 5px;
                display: flex;
                flex-direction: row;
                cursor: pointer;
            }
            
            .episode-item:hover {
                background: #555;
            }
            
            .episode-item img {
                object-fit: cover;
                width: inherit;
                height: 60px;
                border-radius: 5px;
            }
            
            .episode-item p {
                width: 90%;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 14px;
                font-weight: 500;
                margin-left: 10px;
            }
            
            @media screen and (max-width: 320px) {
                .episode-item p {
                    font-size: 12px;
                }
            }
            
            @media (min-width: 321px) and (max-width) {
                .episode-item p {
                    font-size: 14px;
                }
            }
            
            @media screen and (max-width: 600px) {
                .info {
                    padding: 15px 10px 0 10px;
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
            
                .media-container {
                    margin: 0;
                }
            
                .episode {
                    margin: 20px 15px;
                }
            
                .episode-item img {
                    height: 70px;
                }
            
                .episode-item p {
                    padding-right: 10px;
                }       
            }
            
            @media screen and (max-width: 768px) {
                :host {
                    grid-template-rows: auto auto auto;
                }
            
                .media-container {
                    grid-column: span 2;
                }
            
                .info {
                    grid-column: span 2;
                }
            
                .episode {
                    grid-column: span 2;
                    grid-row: 3;
                }
            
                .episode-item p {
                    width: 85%;
                }
            
                .ep-list {
                    padding: 10px;
                    font-size: 14px;
                }
            }
            
            @media (min-width: 601px) and (max-width: 768px) {
                .episode {
                    margin-left: 50px;
                }
                
                .episode-item p {
                    font-size: 18px;
                }
            
                .episode-item img {
                    height: 110px;
                }
            
                .episode-album {
                    height: 100%;
                    padding: 0;
                }
            
                .episode-scroll {
                    position: relative;
                    height: 100%;
                    -ms-overflow-style: 0;  
                    scrollbar-width: 0; 
                }
            
                .episode-scroll::-webkit-scrollbar {
                    width: 0;
                }
            
                .episode-item:hover {
                    background: initial;
                }
            }
            
            @media (min-width: 769px) and (max-width: 1024px) {
                .episode-item p {
                    font-size: 10px;
                }
            }
            </style>

            <section class="media-container">
                <iframe class="video-player" src="${this._albums.episodeList[this._episodes].link}" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>
            </section>

            <section class="info">
                <p class="title">${this._albums.title} Episode ${this._albums.episodeList[this._episodes].id}</p>

                <div class="rate-year">
                    <p class="rating">&#9733; ${this._albums.rate} |</p>
                    <p class="year">${this._albums.year}</p>
                </div>
                    
                <div class="tag-list"></div>
                <p class="description">${this._albums.description}</p>

                <button class="collection">Tambahkan ke Koleksi Saya</button>
            </section>

            <section class="episode">
                <p class="ep-list">Episode List</p>
                <div class="episode-album">
                    <div class="episode-scroll"></div>
                </div>
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

        const epsiodeScroll = this.shadowDOM.querySelector(".episode-scroll");
        this._albums.episodeList.forEach(album => {
            const content = document.createElement("a");
            content.classList.add("episode-item");
            content.innerHTML = `
                <a href="#">
                    <img src="${album.banner}">
                </a>    
                <p>${this._albums.title} Episode ${album.id}</p>
            `;

            epsiodeScroll.appendChild(content);     
        })

        const title = this.shadowDOM.querySelector(".title");
        const episodeItem = this.shadowDOM.querySelectorAll(".episode-item");
        const videoPlayer = this.shadowDOM.querySelector("iframe");
        const arrayEpisode = [...episodeItem];
        arrayEpisode.forEach(item => {
            item.addEventListener("click", () => {
                const index = arrayEpisode.indexOf(item);
                videoPlayer.setAttribute("src", this._albums.episodeList[index].link);
                title.textContent = `${this._albums.title} Episode ${this._albums.episodeList[index].id}`;
            })
        })
    }
}

customElements.define('play-media', PlayMedia);
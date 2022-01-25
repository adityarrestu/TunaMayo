import { routeAlbum } from '../main.js';
import './grid-item.js';

class GridContent extends HTMLElement {
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
            <style>
                :host {
                    width: 100%;
                    height: 100%;
                    padding: 20px 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                
                .grid-wrap {
                    min-width: 86%;
                    height: 630px;
                    margin: 15px 0 0 0;
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(190px, 0.8fr));
                    grid-gap: 5px 6px;
                    justify-content: space-between;
                    overflow: hidden;
                    box-shadow: 0px -20px 12px rgba(17, 19, 25, .5) inset;
                    transition: 300ms ease-in;
                    animation: fadein 300ms ease-in;
                }

                .grid-wrap.expand {
                    height: 100%;
                }
                
                .not-found {
                    display: none;
                    width: 80%;
                    height: 80vh;
                    padding: 20px;
                    font-size: 1rem;
                    text-align: center;
                    color: rgba(255, 255, 255, .8);
                    animation: fadein 300ms ease-in;
                }

                @keyframes fadein {
                    0% {opacity: 0%;}
                    100% {opacity: 100%;}
                }

                .more {
                    margin: 20px;
                    padding: 10px;
                    background: #3E96DB;
                    border: none;
                    border-radius: 10px;
                    font-size: 15px;
                    color: #ffffff;
                    cursor: pointer;
                    transition: 300ms ease-in;
                }

                .more.hidden {
                    display: none;
                }

                @media (min-width: 2040px) {
                    .grid-wrap {
                        width: 100%;
                    }
                }

                @media (min-width: 985px) and (max-width: 1270px) {
                    :host {
                        width: 900px;
                        align-self: center;
                    }

                    .grid-wrap {
                        grid-template-columns: repeat(auto-fill, minmax(170px, 0.8fr));
                        grid-gap: 2px 3px;
                        width: 100%px;
                        height: 585px;
                        align-self: center;
                    }
                }

                @media (min-width: 768px) and (max-width: 984px) {
                    :host {
                        width: 100%;
                    }

                    .grid-wrap {
                        grid-template-columns: repeat(auto-fill, minmax(170px, 0.8fr));
                        grid-gap: 2px 3px;
                        max-width: 100%;
                        height: 100%;
                        align-self: center;
                    }
                    
                }
                
                @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
                    .grid-wrap {
                        grid-template-columns: repeat(auto-fill, minmax(170px, 0.8fr));
                        grid-gap: 5px 3px;
                    }                  
                    
                    .more {
                        display: none;
                    }
                }

                @media screen and (max-width: 768px) {
                    :host .grid-wrap {
                        padding-bottom: 100px;
                    }
                }

                @media (min-width: 320px) and (max-width: 767px) {
                    :host {
                        width: 100%;
                        align-self: right;
                    }
                    
                    .grid-wrap {
                        grid-gap: 5px 3px;
                        max-width: 100%;
                        height: 100%;
                        margin: 5px 0 0 0;
                        align-self: center;
                    }

                    .more {
                        display: none;
                    }
                }

                @media (min-width: 421px) and (max-width: 767px) {
                    .grid-wrap {
                        grid-template-columns: repeat(auto-fill, minmax(100px, 0.8fr));
                    }
                }

                @media (min-width: 371px) and (max-width: 420px) {
                    .grid-wrap {
                        grid-template-columns: repeat(auto-fill, minmax(120px, 0.8fr));
                    }
                }

                @media (min-width: 320px) and (max-width: 370px) {
                    .grid-wrap {
                        grid-template-columns: repeat(auto-fill, minmax(100px, 0.8fr));
                    }
                }
            </style>
            
            <section class="not-found">Album tidak ditemukan</section>
            <section class="grid-wrap"></section>
            <button class="more">Lebih banyak</button>
        `;

        const gridAlbum = this.shadowDOM.querySelector(".grid-wrap");
        const notFound = this.shadowDOM.querySelector(".not-found");

        if (this._albums.length === 0) {
            gridAlbum.style.display = "none";
            notFound.style.display = "inline";

        } else {
            this._albums.forEach(album => {
                const gridItem = document.createElement("grid-item");
                gridItem.album = album;
                gridAlbum.appendChild(gridItem);

                // route to play page from content item function
                gridItem.addEventListener("click", () => {
                    routeAlbum(album);
                })
            })
        }

        const gridItem = this.shadowDOM.querySelectorAll("grid-item");
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("show", entry.isIntersecting); 
                if (entry.isIntersecting) observer.unobserve(entry.target); // berhenti observe
            })

        }, {
            // threshold: 1,
            rootMargin: "100px",
        })

        gridItem.forEach(item => {
            observer.observe(item);
        })

        const moreButton = this.shadowDOM.querySelector(".more");
        moreButton.addEventListener("click", () => {
            gridAlbum.classList.add("expand");
            moreButton.classList.add("hidden");
        })

    }
}

customElements.define('grid-content', GridContent);
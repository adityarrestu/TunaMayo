import { routeAlbum } from '../main.js';
import './content-item.js';

class ContentScroll extends HTMLElement {
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

    set title(title) {
        this._title = title;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                :host {
                    z-index: 7;
                    position: relative;
                    max-width: 1360px;
                    height: 260px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .flex-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                
                .horizontal-scroll {
                    max-height: 100%;
                    max-width: 1180px;
                    margin: 0px 10px;
                    display: flex;
                    overflow-x: hidden;
                    scroll-behavior: smooth;
                    -ms-overflow-style: 0;  
                    scrollbar-width: 0; 
                    -webkit-order: 2;
                }

                .horizontal-scroll::-webkit-scrollbar {
                    display: none;
                }
                
                button {
                    width: 28px;
                    height: 60px;
                    background: none;
                    border: none;
                    font-size: 60px;
                    transform: translateY(-50%);
                    color: rgba(255, 255, 255, 0.7);
                    cursor: pointer;
                    border-radius: .25rem;
                }
                
                .prev {
                    opacity: 0;
                    -webkit-order: 1;
                }
                
                .next {
                    -webkit-order: 3;
                }

                button:hover,
                button:active {
                    color: #ffffff;
                }

                h2 {
                    margin: 6px 0;
                    padding: 0 50px;
                    font-size: 20px;
                    font-weight: 500;
                    color: #ffffff;
                    align-self: flex-start;
                }

                @media (min-width: 2040px) {
                    :host {
                        max-width: 1770px;
                    }

                    .horizontal-scroll {
                        max-width: 1770px;
                    }

                    h2 {
                        padding: 0 10px;
                    }
                }

                @media (min-width: 1025px) and (max-width: 1270px) {
                    :host {
                        max-width: 100%;
                    }   

                    .horizontal-scroll {
                        max-width: 885px;
                    }   
                }

                @media (min-width: 768px) and (max-width: 1024px) {
                    :host {
                        max-width: 100%;
                    }
                    
                    .flex-container {
                        width: 100%;
                        justify-content: flex-start;
                    }

                    .horizontal-scroll {
                        max-width: 100%;
                        overflow-x: scroll;
                    }

                    h2 {
                        padding: 0 20px;
                    }

                    button {
                        display: none;
                    }
                }

                @media (min-width: 320px) and (max-width: 767px) {
                    :host {
                        max-width: 100%;
                        height: 120px;
                    }
                    
                    .flex-container {
                        width: 100%;
                        justify-content: flex-start;
                    }

                    .horizontal-scroll {
                        max-width: 100%;
                        overflow-x: scroll;
                        margin: 0 0 0 5px;
                    }

                    h2 {
                        padding: 0 10px;
                        font-size: 10px;
                    }

                    button {
                        display: none;
                    }
                }
            </style>
            
            <h2>${this._title}</h2>

            <section class="flex-container">
                <button class="prev">&#8249;</button>
                <button class="next">&#8250;</button>

                <div class="horizontal-scroll">
                </div>
            </section>
        `; 
        
        // create content item
        const horizonScroll = this.shadowDOM.querySelector(".horizontal-scroll"); 
        this._albums.forEach(album => {
            const contentItem = document.createElement("content-item");
            contentItem.album = album;
            horizonScroll.appendChild(contentItem); 
        })
        
        let mediaMid = window.matchMedia('(min-width:  985px) and (max-width: 1270px)');
        let mediaLarge = window.matchMedia('(min-width: 1270px');
        let scrollValue;
        if (mediaMid.matches) {
            scrollValue = 885;
        } else if (mediaLarge.matches) {
            scrollValue = 1180;
        }

        // button scroll function
        const buttons = this.shadowDOM.querySelectorAll("button");
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const offset = button.className === "next" ? scrollValue : -(scrollValue);
                horizonScroll.scrollLeft += offset;

                const buttonPrev = this.shadowDOM.querySelector(".prev");
                const buttonNext = this.shadowDOM.querySelector(".next");
                (horizonScroll.scrollLeft + offset) >= (horizonScroll.scrollWidth - 1180) ? 
                    buttonNext.style.opacity = 0 : buttonNext.style.opacity = 1;
                
                (horizonScroll.scrollLeft + offset) <= (0 + 400) ? 
                    buttonPrev.style.opacity = 0 : buttonPrev.style.opacity = 1;
            })
        })

        const contentItem = this.shadowDOM.querySelectorAll("content-item");
        const arrayContent = [...contentItem];
        arrayContent.forEach(content => {
            content.addEventListener("click", () => {
                routeAlbum(this._albums[arrayContent.indexOf(content)]);
            })
        })

    }

}

customElements.define('content-scroll', ContentScroll);
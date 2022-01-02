import './grid-content.js';
import albums from "./albums.js";
import tag from "./tag.js";
import featuredAlbums from './featured-album.js';

class FilterTag extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                *, *::before, *::after {
                    box-sizing: border-box;
                    font-family: Roboto, sans serif;
                }

                :host {
                    position: sticky;
                    top: 55px;
                    width: 100%;
                    height: 60px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: rgba(0, 0, 0, 0);
                }

                button {
                    width: 40px;
                    height: 37px;
                    background: none;
                    border: none;
                    font-size: 3rem;
                    transform: translateY(-50%);
                    color: rgba(255, 255, 255, 0.7);
                    cursor: pointer;
                    border-radius: .25rem;
                    padding: 0 .5rem;
                    align-self: center;
                }
                
                .prev {
                    -webkit-order: 1;
                    opacity: 0;
                }

                .next {
                    -webkit-order: 3;
                }

                .tag-container {
                    width: 80%;
                    height: 100%;
                    padding: 5px;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    scroll-behavior: smooth;
                    -webkit-order: 2;
                }

                .tag-container::-webkit-scrollbar {
                    display: none;
                }
                
                .tag-item {
                    margin-right: 8px;
                    padding: 5px 8px;
                    background: rgba(255, 255, 255, .9);
                    border-radius: 8px;
                    text-align: center;
                    white-space: nowrap;
                    color: rgba(0, 0, 0, .7);
                    cursor: pointer;
                    transition: 500ms ease;
                }
                
                .tag-item.data-active {
                    background: #3E96DB;
                    color: #ffffff;
                    transition: 500ms ease;
                }
            </style>

            <button class="prev">&#8249;</button>
            <button class="next">&#8250;</button>

            <div class="tag-container"></div>
        `;

        const tagContainer = this.shadowDOM.querySelector(".tag-container");
        tag.forEach(tag => {
            const tagItem = document.createElement("p");
            tagItem.textContent = tag;
            tagItem.classList.add("tag-item");
            tagContainer.appendChild(tagItem);
        })
        
        const main = document.querySelector("main");
        const gridContent = document.createElement("grid-content");
        const tagItem = this.shadowDOM.querySelectorAll(".tag-item");
        tagItem[0].classList.add("data-active");

        let filteredAlbums = (tag = "Baru Tayang") => {
            if (tag === "Baru Tayang" || tag === "Rekomendasi") {
                return albums.filter(album => {
                    return album.statusAlbum === "Baru Tayang" || album.statusAlbum === "Completed";
                })
            } else {
                return albums.filter(album => {
                    return album.tag.includes(tag) && (album.statusAlbum === "Baru Tayang" || album.statusAlbum === "Completed");
                })
            }
        }

        gridContent.albums = filteredAlbums();
        main.appendChild(gridContent);
        
        tagItem.forEach(tag => {
            tag.addEventListener("click", () => {
                // add class active data and remove
                const activeData = this.shadowDOM.querySelector(".tag-item.data-active");
                tag.classList.add("data-active");
                activeData.classList.remove("data-active");

                console.log(filteredAlbums(tag.textContent));
                gridContent.albums = filteredAlbums(tag.textContent);
            })
        })        

        // button scroll function
        const buttons = this.shadowDOM.querySelectorAll("button");
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const offset = button.className === "next" ? 600 : -600;
                tagContainer.scrollLeft += offset;

                const buttonPrev = this.shadowDOM.querySelector(".prev");
                const buttonNext = this.shadowDOM.querySelector(".next");
                (tagContainer.scrollLeft + offset) >= (tagContainer.scrollWidth - 800) ? 
                    buttonNext.style.opacity = 0 : buttonNext.style.opacity = 1;
                
                (tagContainer.scrollLeft + offset) <= (0 + 100) ? 
                    buttonPrev.style.opacity = 0 : buttonPrev.style.opacity = 1;
            })
        })

    }
}

customElements.define('filter-tag', FilterTag);
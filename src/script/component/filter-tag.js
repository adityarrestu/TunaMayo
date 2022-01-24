import './grid-content.js';
import albums from "../collection/albums.js";
import tag from "../collection/tag.js";

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
            <link rel="stylesheet" href="./src/style/filter-tag.css">
            
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
        
        const main = document.querySelector(".content");
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
                (tagContainer.scrollLeft + offset) >= (tagContainer.scrollWidth - 1100) ?
                    buttonNext.classList.add("hidden") : buttonNext.classList.remove("hidden");
                    
                (tagContainer.scrollLeft + offset) <= (0 + 100) ?
                    buttonPrev.classList.remove("appear") : buttonPrev.classList.add("appear");
            })
        })

    }
}

customElements.define('filter-tag', FilterTag);
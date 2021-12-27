class SliderItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM =  this.attachShadow({mode: "open"});      
    }

    connectedCallback() {
        this.render();
    }

    set album(album) {
        this._album = album;
        this.render();
    }   

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                *, *::before, *::after {
                    box-sizing: border-box;
                }

                :host {
                    position: absolute;
                    inset: 0;
                    opacity: 0;
                    transition: 200ms opacity ease-in-out;
                    transition-delay: 300ms;
                }
                
                :host(.data-active) {
                    opacity: 1;
                    transition-delay: 200ms;
                }

                :host .img-featured {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }
                
                :host(.data-active) .img-featured {
                    z-index: 1;
                }

                /* info */
                :host .info {
                    z-index: 4;
                    position: absolute;
                    width: 45%;
                    height: auto;
                    top: 10%;
                    left: 8%;
                    cursor: default;
                    opacity: 0;
                    transition: 200ms opacity ease-in-out;
                }
                
                :host(.data-active) .info {
                    z-index: 4;
                    opacity: 1;
                }
                
                .title-img {
                    margin: 20px 0px;
                }
                
                .rate-year {
                    display: flex;
                    width: 100%;
                    height: auto;
                    align-items: center;
                    margin-bottom: 10px;
                }
                
                p {
                    margin: 0px 4px;
                    color: #FFFFFF;
                    font-size: 18px;
                }
                
                .rating {
                    color: #3E96DB;
                }
                
                .description {
                    width: 100%;
                    margin: 8px 0px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                
                /* poster */
                :host .poster {
                    z-index: 4;
                    position: absolute;
                    width: auto;
                    height: 95%;
                    background-size: cover;
                    opacity: 0;
                    animation: moveout 1600ms ease-in forwards;
                    animation-delay: -300ms;
                }
                
                :host(.data-active) .poster {
                    animation: movein 300ms ease-out forwards;
                    animation-delay: 500ms;
                } 
                
                @keyframes movein {
                    0% {opacity: 0%; right: -20%;}
                    100% {opacity: 100%; right: 10%;}
                }
                
                @keyframes moveout {
                    0% {opacity: 100%; right: 10%;}
                    25% {opacity: 100%; right: 12%;}
                    60% {opacity: 0%; right: 20%;}
                    100% {opacity: 0%; right: 20%;}
                }

                .tag-list {
                    display: flex;
                    width: 100%;
                    height: 30px;
                    overflow-x: scroll;
                }

                .tag-list::-webkit-scrollbar {
                    display: none;
                }
                
                .tag {
                    padding: 5px 8px;
                    background: rgba(0, 0, 0, .5);
                    border-radius: 8px;
                    text-align: center;
                    white-space: nowrap;
                }
            </style>

            <img class="poster" src="${this._album.poster}">

            <img class="img-featured" src="${this._album.background}" alt="">                    

            <div class="info">
                <img class="title-img" src="${this._album.titleImg}" width="300px">

                <div class="rate-year">
                    <p class="rating">&#9733; ${this._album.rate} |</p>
                    <p class="year">${this._album.year}</p>
                </div>
                
                <div class="tag-list"></div>
                    
                <p class="description">${this._album.description}</p>
            </div>
        `;

        // make tag list
        const tagList = this.shadowDOM.querySelector(".tag-list");
        this._album.tag.forEach(tag => {
            const tagItem = document.createElement("p");
            tagItem.textContent = tag;
            tagItem.classList.add("tag");
            tagList.appendChild(tagItem);
        })
    }

}

customElements.define("slider-item", SliderItem);
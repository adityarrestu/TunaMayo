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
                    width: 500px;
                    top: 120px;
                    left: 100px;
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
                    max-height: 100px;
                }

                .title {
                    display: none;
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
                    height: 47px;
                    margin: 8px 0px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-size: 14px;
                }
                
                /* poster */
                :host .poster {
                    z-index: 4;
                    position: absolute;
                    width: auto;
                    height: 600px;
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
                    height: 22px;
                    overflow-x: scroll;
                }

                .tag-list::-webkit-scrollbar {
                    display: none;
                }
                
                .tag {
                    margin: 0px 2px;
                    padding: 5px 8px;
                    background: rgba(0, 0, 0, .5);
                    border-radius: 5px;
                    text-align: center;
                    white-space: nowrap;
                    font-size: 11px;
                }

                .tag:first-child {
                    margin: 0;
                    margin-right: 5px;
                }

                .tag:last-child {
                    margin: 0;
                    margin-left: 5px;
                }

                @media (min-width: 768px) and (max-width: 1024px) {
                    @keyframes movein {
                        0% {opacity: 0%; right: -20%;}
                        100% {opacity: 100%; right: 10%;}
                    }
                    
                    @keyframes moveout {
                        0% {opacity: 100%; right: 10%;}
                        25% {opacity: 100%; right: 25%;}
                        60% {opacity: 0%; right: 30%;}
                        100% {opacity: 0%; right: 30%;}
                    }

                    :host .info {
                        top: 390px;
                        left: 30px;
                        width: 600px;
                        overflow: hidden;
                    }
                }

                @media (min-width: 481px) and (max-width: 757px) {
                    :host .poster {
                        height: 480px;
                        top: 90px;
                    }

                }

                @media (min-width: 425px) and (max-width: 480px) {
                    @keyframes movein {
                        0% {opacity: 0%; right: -20%;}
                        100% {opacity: 100%; right: 50px;}
                    }
                }
                
                @media (min-width: 375px) and (max-width: 480px) {
                    :host .poster {
                        height: 460px;
                        top: 90px;
                    }
                }
                    
                @media (min-width: 375px) and (max-width: 424px) {
                    @keyframes movein {
                        0% {opacity: 0%; right: -20%;}
                        100% {opacity: 100%; right: 20px;}
                    }
                }

                @media (min-width: 320px) and (max-width: 374px) {
                    :host .poster {
                        height: 420px;
                        top: 90px;
                    }
                    
                    @keyframes movein {
                        0% {opacity: 0%; right: -20%;}
                        100% {opacity: 100%; right: 10px;}
                    }
                }

                @media (min-width: 320px) and (max-width: 757px) {
                    
                    @keyframes moveout {
                        0% {opacity: 100%; right: 10px;}
                        25% {opacity: 100%; right: 30%;}
                        60% {opacity: 0%; right: 50%;}
                        100% {opacity: 0%; right: 50%;}
                    }

                    :host .info {
                        top: 440px;
                        left: 10px;
                        width: 420px;
                        overflow: hidden;
                        box-shadow:  0px -15px 5px rgba(17, 19, 25, .5) inset;
                    }

                    .title-img {
                        max-height: 60px;
                    }
                }

                @media (min-width: 320px) and (max-width: 1024px) {
                    .tag-list, .description {
                        display: none;
                    }

                    .title {
                        display: initial;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        height: 20px;
                    }
                    
                    .rate-year {
                        margin-bottom: 0;
                    }

                    p {
                        font-size: 12px;
                    }

                    .title-img {
                        margin: 0 0 10px 0;
                    }
                }
            </style>

            <img class="poster" src="${this._album.poster}">
            
            <img class="img-featured" src="${this._album.background}" alt="">                    

            <div class="info">
                <img class="title-img" src="${this._album.titleImg}">
                <div class="rate-year">
                    <p class="rating">&#9733; ${this._album.rate} |</p>
                    <p class="year">${this._album.year}</p>
                </div>
                <p class="title">${this._album.title} | ${this._album.episode}</p>

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
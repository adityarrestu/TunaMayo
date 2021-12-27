class ContentItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    set album(album) {
        this._album = album;
    }

    render() {  
        this.shadowDOM.innerHTML = `
            <style>
                :host {
                    min-width: 290px;
                    margin: 5px;
                }

                .content-wrap {
                    display: flex;
                    height: 170px;
                    width: 100%;
                    background: url("${this._album.banner}") no-repeat center;
                    background-size: cover;
                    border-radius: 10px;
                    align-items: flex-end;
                }
                
                .content-wrap > img {
                    max-width: 250px;
                    object-fit: cover;
                }
                
                .episode {
                    z-index: 1;
                    margin: 0;
                    padding: 5px 0px 5px 10px;
                    width: 100%;
                    font-size: 13px;
                    color: #ffffff;
                    box-shadow: 0px -15px 12px rgba(17, 19, 25, .5) inset;
                    border-radius: 0px 0px 10px 10px;
                }

                .title {
                    max-width: 290px;  
                    max-height: 44px; 
                    margin: 10px 0px;
                    color: #8A8A8D;
                    text-overflow: ellipsis;
                }
            </style>

            <div class="content-wrap">
                <p class="episode">${this._album.statusAlbum}</p>
            </div>
            <p class="title">${this._album.title}</p>
        `;
        
    }

}

customElements.define('content-item', ContentItem);
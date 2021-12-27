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
                    width: 1000px;
                    margin: 5px;
                }

                .content-wrap {
                    display: flex;
                    height: 170px;
                    width: 290px;
                    background: url("${this._album.banner}") no-repeat center;
                    background-size: cover;
                    border-radius: 10px;
                    align-items: flex-end;
                    box-shadow: 0px -25px 15px rgba(17, 19, 25, .7) inset;
                }

                .content-wrap > img {
                    max-width: 250px;
                    object-fit: cover;
                }

                .episode {
                    z-index: 1;
                    margin: 5px;
                    padding: 0px 10px;
                    color: #ffffff;
                }

                .title {
                    max-width: 290px;   
                    color: #8A8A8D;
                    text-overflow: ellipsis;
                }
            </style>

            <div class="content-wrap">
                <p class="episode">Diperbarui sampai</p>
            </div>
            <p class="title">${this._album.title}</p>
        `;
        
    }

}

customElements.define('content-item', ContentItem);
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

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                *, *::before, *::after {
                    box-sizing: border-box;
                    font-family: Roboto, sans serif;
                }
                
                :host {
                    z-index: 7;
                    position: relative;
                    width: 100%;
                    height: 280px;
                    top: -3vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7), #111319);
                }
                
                .flex-container {
                    max-width: 96%;
                    margin: 0px 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .horizontal-scroll {
                    max-height: 100%;
                    max-width: 98%;
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
                    width: 40px;
                    height: 95px;
                    background: none;
                    border: none;
                    font-size: 5rem;
                    transform: translateY(-50%);
                    color: rgba(255, 255, 255, 0.7);
                    cursor: pointer;
                    border-radius: .25rem;
                    padding: 0 .5rem;
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
                    width: 88%;
                    margin: 10px 10%;
                    font-size: 24px;
                    color: #ffffff;
                }
            </style>
            
            <h2>Baru Tayang</h2>

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
        
        // button scroll function
        const buttons = this.shadowDOM.querySelectorAll("button");
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const offset = button.className === "next" ? 1200 : -1200;
                horizonScroll.scrollLeft += offset;

                const buttonPrev = this.shadowDOM.querySelector(".prev");
                const buttonNext = this.shadowDOM.querySelector(".next");
                (horizonScroll.scrollLeft + offset) >= (horizonScroll.scrollWidth - 1400) ? 
                    buttonNext.style.opacity = 0 : buttonNext.style.opacity = 1;
                
                (horizonScroll.scrollLeft + offset) <= (0 + 500) ? 
                    buttonPrev.style.opacity = 0 : buttonPrev.style.opacity = 1;
            })
        })

    }

}

customElements.define('content-scroll', ContentScroll);
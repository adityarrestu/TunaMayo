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
                    height: 300px;
                    top: -3vh;
                    display: flex;
                    flex-direction: column;
                    background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7), #111319);
                }
                
                .flex-container {
                    max-width: 1300px;
                    margin: 0px 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .horizontal-scroll {
                    max-height: 100%;
                    max-width: 1200px;
                    margin: 0px 10px;
                    display: flex;
                    overflow: hidden;
                    overflow-x: scroll;
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
                    -webkit-oreder: 1;
                }
                
                .next {
                    -webkit-order: 3;
                }

                button:hover,
                button:active {
                    color: #ffffff;
                }

                h2 {
                    margin: 10px 7%;
                    left: 8%;
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
                horizonScroll.scrollTo(offset, 0);
            })
        })

        // observe first and last content to hide button
        const contentItem = this.shadowDOM.querySelectorAll("content-item");        
        const firstCardObserver = new IntersectionObserver(entries => {
            const firstCard = entries[0];
            const lastCard = entries[entries.length -1];
            const buttonPrev = this.shadowDOM.querySelector(".prev");
            const buttonNext = this.shadowDOM.querySelector(".next");

            firstCard.isIntersecting ? buttonPrev.style.opacity = 0 : buttonPrev.style.opacity = 1;
            lastCard.isIntersecting ? buttonNext.style.opacity = 0 : buttonNext.style.opacity = 1;
        })

        firstCardObserver.observe(contentItem[0]);
        firstCardObserver.observe(contentItem[contentItem.length - 1])

    }

}

customElements.define('content-scroll', ContentScroll);
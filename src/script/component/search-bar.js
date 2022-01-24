import albums from "../collection/albums.js";
import { routeAlbum } from "../main.js";

class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <link rel="stylesheet" href="./src/style/search-bar.css">
            <style>
                :host {
                    max-width: 380px;
                }
                
                :host .search-input {
                    position: relative;
                    background: rgba(68, 69, 72, 0.5);
                    border: 1px solid #555659;
                    width: 100%;
                    border-radius: 30px;
                    box-shadow: 0px 1px 5px 3px rgb(0, 0, 0, 0.12);
                }
                
                .search-input input {
                    height: 30px;
                    width: 80%;
                    outline: none;
                    border: none;
                    background: none;
                    border-radius: 20px;
                    padding: 0 60px 0 20px;
                    font-size: 18px;
                    color: #ffffff;
                    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
                }
                
                .search-input img{
                    height: 20px;
                    width: 20x;
                    position: absolute;
                    top: 13%;
                    right: 5%;
                    text-align: center;
                    cursor: pointer;
                }
                
                .search-input .autocom-box {
                    position: absolute;
                    top: 40px;
                    padding: 0;
                    width: 100%;
                    max-height: 280px;
                    background:  rgba(68, 69, 72, 1); 
                    overflow-y: auto;
                    overflow-x: hidden;
                    opacity: 0;
                    pointer-events: none;
                }
                
                .search-input.active .autocom-box {
                    padding: 10px 8px;
                    opacity: 1;
                    pointer-events: auto;
                }
                
                .autocom-box li {
                    list-style: none;
                    padding: 8px 12px;
                    width: 100%;
                    cursor: default;
                    border-radius: 3px;
                    display: none; 
                    color: #ffffff;
                    cursor: pointer;
                }

                .autocom-box li .poster {
                    width: 60px;
                    height: 80px;   
                    background-size: contain;
                    margin-right: 10px;
                }

                .autocom-box li p {
                    margin: 0;
                }
                
                .search-input.active .autocom-box li {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }
                
                .autocom-box li:hover {
                    background: #232428;
                }
            </style>

            <div class="search-input">

                <input type="text" placeholder="Telusuri...">
            
                <div class="autocom-box">
                </div>
            
                <img class="search-btn" src="./src/img/icon/search.png">
            </div>
        `;

        const searchBox = this.shadowDOM.querySelector(".search-input");
        const inputBox = this.shadowDOM.querySelector("input");
        const suggBox = this.shadowDOM.querySelector(".autocom-box");
        
        // if user press any key
        inputBox.onkeyup = e => {
            let userData = e.target.value;
            let title;
            let filteredTitle;
            if (userData) {
                title = albums.filter(album => {
                    return album.title.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
                });
                
                filteredTitle = title.map(data => {
                    return data = `    
                        <li>
                            <p>${data.title}</p>
                        </li>
                    `;
                        // <div class="poster" style="background: url('${data.poster}') no-repeat center;"></div>
                })

                showSuggestion(filteredTitle);

                let allList = suggBox.querySelectorAll("li");
                let arrayList = [...allList];
                arrayList.forEach(data => {
                    data.addEventListener('click', () => {
                        let index = arrayList.indexOf(data);
                        routeAlbum(title[index]);

                        searchBox.classList.remove("active");
                        inputBox.value = '';
                    })
                })

            } else {
                searchBox.classList.remove("active");
            }
        }
        
        function showSuggestion(list) {
            let listData;
            if (list.length == 0) {
                searchBox.classList.remove("active");
            } else {
                searchBox.classList.add("active");
                listData = list.join('');
            }
            suggBox.innerHTML = listData;
        }

        const searchButton = this.shadowDOM.querySelector(".search-btn");
        const mediaSmall = window.matchMedia('(max-width: 425px');
        if (mediaSmall.matches) {
            searchButton.addEventListener("click", () => {
                console.log("ditekan..")
                this.className === "show-bar" ?
                    this.classList.remove("show-bar") :
                    this.classList.add("show-bar");
            })
        }
    }
}

customElements.define('search-bar', SearchBar);
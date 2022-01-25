import { routeHome } from '../main.js';
import './search-bar.js';

class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "closed"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <link rel="stylesheet" href="./src/style/app-bar.css">
        <style>       
            :host {
                z-index: 17;
                position: fixed;
                display: flex;
                width: 100%;
                height: 50px;
                left: 0px;
                top: 0px;
                justify-content: space-between;
                align-items: center;
                padding: 20px 10px;
                background: #232428;
            }

            .left-nav {
                display: flex;
                margin-left: 16px;
                align-items: center;
            }

            nav, ul, li, a {
                display: inline-block;
                text-decoration: none;
                line-height: 21px;
                list-style: none;
                color: #FFFFFF;
                transition: all 0.3s ease 0s;
            }

            nav ul {
                padding: 0;
            }

            nav a {
                cursor: pointer;
                padding: 0px 13px;
            }
            
            nav a:hover {
                color: #3E96DB;
            }

            .logo {
                width: 136px;
                height: 25px;
                padding: 0 13px;
                cursor: pointer;
            }

            .right-nav {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 50px;
                margin-right: 20px;
                overflow: visible;
            }

            .right-nav .history,
            .right-nav .user {
                width: 35px;
                height: 35px;
                margin-left: 20px;
                background:  rgba(68, 69, 72, 1);
                border-radius: 20px;
                cursor: pointer;
                order: 2;
            }

            .right-nav .history img {
                padding: 25% 0 0 20%;
                width: 20px;
            }

            .right-nav .user img {
                padding: 15% 0 0 20%;
                width: 20px;
            }
        </style>

        <div class="left-nav">

            <img class="logo link-home" src="./src/img/icon/logo.svg" alt="tunamayo">
        
            <nav>
                <ul>
                    <li><a class="link-home">Movie</a></li>
                    <li><a class="link-home">Drama</a></li>
                    <li><a class="link-home">Anime</a></li>
                </ul>
            </nav>
        </div>

        <div class="right-nav">
            <div class="history">
                <img src="./src/img/icon/history.png">
            </div>

            <div class="user">
                <img src="./src/img/icon/user.png">
            </div>
            
        </div>
        `;

        const linkHome = this.shadowDOM.querySelectorAll(".link-home");
        linkHome.forEach(link => {
            link.addEventListener("click", () => {
                routeHome();
            })
        })

        const rightNav = this.shadowDOM.querySelector(".right-nav");
        const searchBar = document.createElement("search-bar");
        searchBar.classList.add("show-bar");
        rightNav.appendChild(searchBar);
    }
}

customElements.define("app-bar", AppBar);
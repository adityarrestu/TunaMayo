class FooterBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <link rel="stylesheet" href="./src/style/footer.css">

            <section>
                <h3>Hubungi Kami</h3>

                <div class="contact-icon">
                    <img src="./src/img/icon/fb.png" alt="">
                    <img src="./src/img/icon/twitter.png" alt="">
                    <img src="./src/img/icon/instagram.png" alt="">
                </div>

                <p>halo@tunamayo.co.id</p>
            </section>
            
            <section>
                <h3>Lainnya</h3>
                <p>Tentang Kami</p>
                <p>Feedback</p>
                <p>FAQs</p>
            </section>

            <section>
                <h3>Perjanjian Pelayanan</h3>
                <p>Kebijakan Privasi</p>
                <p>Ketentuan Pengguna</p>
            </section>
        `;
    }
}

customElements.define('footer-bar', FooterBar);
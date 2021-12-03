function checkLS() {
    if (localStorage.getItem('cookies') === null) {
        localStorage.setItem('cookies', 0);
    }
}

function res() {
    // let sum = parseInt(localStorage.getItem('cookies'))

    // if (sum == 0) {
    //     window.open('https://www.effectivecpmgate.com/swqh6tcn3k?key=163b8eee7c2fbbbdae754cb90a81d9f7', '_blank');
    // } else {
    validation();
    // }
    // localStorage.setItem('cookies', 1);

}

function welcomeMsg() {
    const welcomeMsgEl = document.querySelector("#welcomeMsg");
    let array = 0;

    const husenalgifari28 = `<a href="https://husenalgifari28.com/" target="_blank">husenalgifari28</a>`;
    const husenalgifari28IG = `<a href="https://www.instagram.com/husenalgifari28/" target="_blank">husenalgifari28</a>`;
    const husenalgifari28WA = `<a href="https://api.whatsapp.com/send?phone=6283129055606" target="_blank">083129055606</a>`;

    const msg1 = `<p class="animation mb-0 text-truncate">JOKI, TOP UP & GIFT SKIN ML di ${husenalgifari28} ya</p>`;
    const msg2 = `<p class="animation mb-0 text-truncate">IG: ${husenalgifari28IG} / WA: ${husenalgifari28WA}</p>`;
    const msg3 = `<p class="animation mb-0 text-truncate">Husenalgifari28 dijamin amanah dan terpercaya</p>`;
    const msg4 = `<p class="animation mb-0 text-truncate">Tetap jaga kesehatan..`;
    const msg5 = `<p class="animation mb-0 text-truncate">Hehey not bad...</p>`;

    let arrayEl = [msg1, msg2, msg3, msg4, msg5];
    let arrayMax = 5;
    setInterval(() => {
        welcomeMsgEl.innerHTML = arrayEl[array];

        array++;
        if (array >= arrayMax) {
            array = 0;
        }
    }, 4000);
}

window.dataLayer = window.dataLayer || [];

function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-206846692-3');
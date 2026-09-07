/* =========================================================
   EATERGO - FINAL RESPONSIVE / CANVA STYLE
   Matches current index.html + scripts.js
========================================================= */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

:root{
    --orange:#ff641f;
    --orange-dark:#e95313;
    --green:#16833f;
    --black:#080808;
    --white:#ffffff;
    --bg:#f7f7f7;
    --text:#171717;
    --muted:#777;
    --border:#e5e5e5;
    --container:982px;
}

html{
    scroll-behavior:smooth;
}

body{
    font-family:Inter,Arial,sans-serif;
    background:var(--bg);
    color:var(--text);
    overflow-x:hidden;
    font-size:13px;
}

button,
input{
    font:inherit;
}

button{
    cursor:pointer;
}

a{
    text-decoration:none;
    color:inherit;
}

img{
    display:block;
    max-width:100%;
}


/* =========================================================
   HEADER
========================================================= */

.main-header{
    height:58px;
    background:#080808;
    color:#fff;
    position:sticky;
    top:0;
    z-index:1000;
    border-bottom:1px solid #171717;
}

.header-inner{
    width:min(var(--container),calc(100% - 36px));
    height:100%;
    margin:auto;
    display:flex;
    align-items:center;
    gap:13px;
}

.logo{
    display:flex;
    align-items:center;
    white-space:nowrap;
    font-weight:800;
    letter-spacing:-1.1px;
}

.logo-chef{
    width:27px;
    height:27px;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    margin-right:3px;
}

.logo-chef svg{
    width:27px;
    height:27px;
}

.logo-text{
    font-size:24px;
    color:#fff;
}

.logo-text span{
    color:var(--orange);
}

.location-selector{
    height:31px;
    min-width:72px;
    padding:0 9px;
    border:1px solid #333;
    border-radius:18px;
    background:#111;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:5px;
    font-size:10px;
}

.location-icon{
    display:flex;
    color:var(--orange);
}

.location-icon svg{
    width:12px;
    height:12px;
}

.chevron-icon{
    width:10px;
    height:10px;
    color:#aaa;
}

.header-search{
    height:31px;
    width:260px;
    background:#fff;
    border-radius:18px;
    display:flex;
    align-items:center;
    gap:7px;
    padding:0 11px;
    color:#777;
}

.header-search svg{
    width:13px;
    height:13px;
    flex:none;
}

.header-search input{
    width:100%;
    border:0;
    outline:0;
    font-size:9px;
    color:#222;
    background:transparent;
}

.desktop-nav{
    margin-left:auto;
    display:flex;
    align-items:center;
    height:100%;
    gap:23px;
    font-size:10px;
    font-weight:700;
    color:#ddd;
}

.nav-link{
    height:100%;
    display:flex;
    align-items:center;
    border-bottom:2px solid transparent;
}

.nav-link:hover,
.nav-link.active{
    color:var(--orange);
    border-color:var(--orange);
}

.header-actions{
    display:flex;
    align-items:center;
    gap:7px;
}

.icon-button{
    position:relative;
    width:29px;
    height:29px;
    border:0;
    border-radius:50%;
    background:transparent;
    display:grid;
    place-items:center;
    color:#fff;
}

.icon-button svg{
    width:17px;
    height:17px;
}

.icon-button:hover{
    background:#191919;
}

.moon-icon{
    display:none;
}

.theme-button.dark .sun-icon{
    display:none;
}

.theme-button.dark .moon-icon{
    display:block;
}

.login-button,
.signup-button{
    height:29px;
    padding:0 11px;
    border-radius:6px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:9px;
    font-weight:700;
}

.login-button{
    border:1px solid #3a3a3a;
    color:#fff;
    background:transparent;
}

.signup-button{
    background:var(--orange);
    color:#fff;
    border:1px solid var(--orange);
}

.signup-button:hover{
    background:var(--orange-dark);
}

.cart-count{
    position:absolute;
    top:-3px;
    right:-2px;
    min-width:14px;
    height:14px;
    padding:0 3px;
    border-radius:10px;
    background:var(--orange);
    color:#fff;
    font-size:7px;
    display:none;
    align-items:center;
    justify-content:center;
    font-style:normal;
}

.mobile-menu-button{
    display:none;
    background:none;
    border:0;
}

.mobile-menu-button span{
    display:block;
    width:21px;
    height:2px;
    background:#fff;
    margin:4px 0;
}

.mobile-menu{
    display:none;
}


/* =========================================================
   HERO
========================================================= */

.hero{
    height:173px;
    position:relative;
    overflow:hidden;
    color:#fff;
}

.hero-overlay{
    position:absolute;
    inset:0;
    background:
        linear-gradient(
            90deg,
            rgba(0,0,0,.88) 0%,
            rgba(0,0,0,.62) 40%,
            rgba(0,0,0,.12) 78%
        ),
        url("https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1600&q=90")
        center 53% / cover no-repeat;
}

.hero-inner{
    width:min(var(--container),calc(100% - 36px));
    height:100%;
    margin:auto;
    display:flex;
    align-items:center;
}

.hero-content{
    width:620px;
    margin-top:2px;
}

.hero-eyebrow{
    font-size:9px;
    letter-spacing:1.6px;
    color:#ddd;
    margin-bottom:7px;
}

.hero-eyebrow span{
    color:var(--orange);
    margin:0 3px;
}

.hero h1{
    font-size:31px;
    line-height:1.05;
    letter-spacing:-1.3px;
    font-weight:800;
}

.hero h1 span{
    color:var(--orange);
}

.hero p{
    font-size:11px;
    color:#eee;
    margin:6px 0 12px;
}

.hero-search{
    width:435px;
    height:35px;
    background:#fff;
    border-radius:20px;
    display:flex;
    align-items:center;
    padding:3px;
    color:#222;
    box-shadow:0 3px 12px rgba(0,0,0,.14);
}

.hero-location{
    height:100%;
    width:83px;
    border:0;
    background:transparent;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:4px;
    font-size:9px;
    font-weight:700;
    color:#333;
}

.hero-location svg:first-child{
    width:12px;
    height:12px;
    color:var(--orange);
}

.hero-chevron{
    width:9px;
    height:9px;
    color:#999;
}

.hero-divider{
    width:1px;
    height:20px;
    background:#ddd;
}

.hero-search-input{
    flex:1;
    min-width:0;
    display:flex;
    align-items:center;
    gap:6px;
    padding:0 9px;
    color:#888;
}

.hero-search-input svg{
    width:12px;
    height:12px;
    flex:none;
}

.hero-search-input input{
    width:100%;
    border:0;
    outline:0;
    font-size:9px;
    color:#222;
}

.hero-search-button{
    height:29px;
    padding:0 18px;
    border:0;
    border-radius:16px;
    background:var(--orange);
    color:#fff;
    font-size:9px;
    font-weight:800;
}


/* =========================================================
   MAIN
========================================================= */

.main-content{
    background:#fff;
}

.section{
    width:min(var(--container),calc(100% - 36px));
    margin:auto;
}


/* =========================================================
   CATEGORIES
========================================================= */

.category-section{
    height:91px;
    display:flex;
    align-items:center;
    position:relative;
}

.category-container{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:12px;
    overflow:hidden;
}

.category-card{
    flex:0 0 76px;
    border:0;
    background:transparent;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:6px;
    color:#222;
}

.category-image{
    width:46px;
    height:46px;
    border-radius:50%;
    overflow:hidden;
    background:#fff3e9;
    box-shadow:0 0 0 4px #fff3e9;
    transition:.18s;
}

.category-image img{
    width:100%;
    height:100%;
    object-fit:cover;
}

.category-card:hover .category-image{
    transform:translateY(-2px);
}

.category-card.active .category-image{
    box-shadow:
        0 0 0 3px #ffe6d8,
        0 0 0 4px var(--orange);
}

.category-name{
    font-size:9px;
    font-weight:700;
    white-space:nowrap;
}

.slider-arrow{
    border:1px solid #ddd;
    background:#fff;
    color:#777;
    border-radius:50%;
    display:grid;
    place-items:center;
}

.slider-arrow svg{
    width:13px;
    height:13px;
}

.category-section > .slider-next{
    position:absolute;
    right:-8px;
    width:27px;
    height:27px;
}


/* =========================================================
   SECTION HEADINGS
========================================================= */

.section-header{
    height:40px;
    display:flex;
    align-items:center;
    justify-content:space-between;
}

.section-title-wrap{
    display:flex;
    align-items:center;
    gap:6px;
}

.section-title-icon{
    width:18px;
    height:18px;
    display:grid;
    place-items:center;
    color:var(--orange);
}

.section-title-icon svg{
    width:17px;
    height:17px;
}

.section-header h2{
    font-size:12px;
    font-weight:800;
}

.view-all{
    display:flex;
    align-items:center;
    gap:3px;
    color:var(--orange);
    font-size:8px;
    font-weight:800;
}

.view-all svg{
    width:11px;
    height:11px;
}


/* =========================================================
   RESTAURANTS
========================================================= */

.restaurant-section{
    padding-bottom:18px;
}

.restaurant-grid{
    display:grid;
    grid-template-columns:repeat(6,minmax(0,1fr));
    gap:13px;
}

.restaurant-card{
    background:#fff;
    border:1px solid #e3e3e3;
    border-radius:7px;
    overflow:hidden;
    box-shadow:0 2px 6px rgba(0,0,0,.045);
    transition:.18s;
    min-width:0;
}

.restaurant-card:hover{
    transform:translateY(-2px);
    box-shadow:0 7px 16px rgba(0,0,0,.09);
}

.restaurant-image{
    height:62px;
    position:relative;
    background:#eee;
}

.restaurant-image > img{
    width:100%;
    height:100%;
    object-fit:cover;
}

.restaurant-badge{
    position:absolute;
    top:5px;
    left:5px;
    background:var(--orange);
    color:#fff;
    border-radius:3px;
    padding:2px 4px;
    font-size:6px;
    font-weight:800;
}

.restaurant-favourite,
.dish-heart{
    position:absolute;
    right:5px;
    top:5px;
    width:20px;
    height:20px;
    border:0;
    border-radius:50%;
    background:rgba(0,0,0,.48);
    display:grid;
    place-items:center;
}

.restaurant-favourite:hover,
.dish-heart:hover{
    background:rgba(0,0,0,.7);
}

.restaurant-favourite.active,
.dish-heart.active{
    background:var(--orange);
}

.heart-icon{
    width:11px;
    height:11px;
    display:block;
    position:relative;
}

.heart-icon::before{
    content:"";
    position:absolute;
    width:9px;
    height:9px;
    left:1px;
    top:1px;
    background:#fff;
    transform:rotate(45deg);
    border-radius:2px;
}

.heart-icon::after{
    content:"";
    position:absolute;
    width:11px;
    height:7px;
    left:0;
    top:0;
    background:#fff;
    border-radius:8px 8px 2px 2px;
}

.restaurant-info{
    padding:7px;
}

.restaurant-name{
    font-size:9px;
    font-weight:800;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}

.restaurant-rating{
    margin:3px 0;
    color:var(--green);
    font-size:7px;
    font-weight:800;
    display:flex;
    align-items:center;
    gap:2px;
}

.rating-star{
    font-size:8px;
    color:var(--green);
}

.restaurant-rating span:last-child{
    color:#777;
    font-weight:500;
}

.restaurant-cuisine,
.restaurant-price{
    font-size:7px;
    color:#777;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}

.restaurant-price{
    margin-top:2px;
}

.restaurant-meta{
    margin-top:6px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:3px;
    font-size:6px;
    color:#777;
}

.restaurant-delivery{
    white-space:nowrap;
    display:flex;
    align-items:center;
    gap:3px;
}

.clock-icon{
    width:9px;
    height:9px;
    border:1px solid #888;
    border-radius:50%;
    position:relative;
    display:inline-block;
}

.clock-icon::before{
    content:"";
    position:absolute;
    width:1px;
    height:3px;
    background:#888;
    left:3px;
    top:1px;
}

.clock-icon::after{
    content:"";
    position:absolute;
    width:3px;
    height:1px;
    background:#888;
    left:3px;
    top:4px;
}

.restaurant-offer{
    background:#e5f6ea;
    color:var(--green);
    padding:3px 4px;
    border-radius:3px;
    font-weight:800;
    white-space:nowrap;
}


/* =========================================================
   OFFERS
========================================================= */

.offers-section{
    width:min(var(--container),calc(100% - 36px));
    margin:auto;
    padding-bottom:12px;
}

.offers-section .section-header{
    height:36px;
}

.arrows{
    display:flex;
    gap:5px;
}

.arrows button{
    width:25px;
    height:25px;
}

.offer-slider{
    overflow:hidden;
}

.offer-grid{
    display:grid;
    grid-template-columns:repeat(3,minmax(0,1fr));
    gap:10px;
}

.offer-card{
    height:78px;
    position:relative;
    overflow:hidden;
    border-radius:7px;
    color:#fff;
    background:#222;
}

.offer-card > img{
    position:absolute;
    inset:0;
    width:100%;
    height:100%;
    object-fit:cover;
}

.offer-card::after{
    content:"";
    position:absolute;
    inset:0;
    background:linear-gradient(
        90deg,
        rgba(0,0,0,.78),
        rgba(0,0,0,.12)
    );
}

.offer-content{
    position:relative;
    z-index:2;
    padding:13px 15px;
}

.offer-content h3{
    margin:2px 0;
    font-size:14px;
    line-height:1.05;
}

.offer-content p{
    font-size:6px;
    margin-bottom:7px;
    color:#eee;
}

.offer-content small{
    font-size:6px;
    color:#ddd;
}

.offer-content button{
    border:0;
    border-radius:4px;
    background:var(--orange);
    color:#fff;
    padding:4px 7px;
    font-size:6px;
    font-weight:800;
}

.slider-dots{
    display:flex;
    justify-content:center;
    gap:4px;
    margin:8px 0 0;
}

.slider-dots span{
    width:5px;
    height:5px;
    border-radius:50%;
    background:#d5d5d5;
}

.slider-dots span.active{
    background:var(--orange);
}


/* =========================================================
   DISHES
========================================================= */

.dishes-section{
    padding-bottom:20px;
}

.dish-grid{
    display:grid;
    grid-template-columns:repeat(6,minmax(0,1fr));
    gap:13px;
}

.dish-card{
    background:#fff;
    border:1px solid #e3e3e3;
    border-radius:7px;
    overflow:hidden;
    box-shadow:0 2px 6px rgba(0,0,0,.04);
    position:relative;
    min-width:0;
}

.dish-image{
    height:62px;
    position:relative;
    background:#eee;
}

.dish-image > img{
    width:100%;
    height:100%;
    object-fit:cover;
}

.dish-heart{
    display:grid;
}

.dish-info{
    padding:7px;
}

.dish-name{
    font-size:9px;
    font-weight:800;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}

.dish-restaurant{
    margin:3px 0 6px;
    font-size:7px;
    color:#777;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}

.dish-bottom{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:4px;
}

.dish-price{
    font-size:9px;
    font-weight:800;
}

.add-dish-button{
    border:0;
    border-radius:4px;
    background:var(--orange);
    color:#fff;
    padding:4px 7px;
    font-size:6px;
    font-weight:800;
}

.add-dish-button:hover{
    background:var(--orange-dark);
}


/* =========================================================
   COLLECTIONS
========================================================= */

.collections-section{
    padding-bottom:22px;
}

.collection-grid{
    display:grid;
    grid-template-columns:repeat(3,minmax(0,1fr));
    gap:13px;
}

.collection-card{
    height:100px;
    position:relative;
    overflow:hidden;
    border-radius:7px;
    color:#fff;
}

.collection-card img{
    width:100%;
    height:100%;
    object-fit:cover;
    transition:.25s;
}

.collection-card:hover img{
    transform:scale(1.04);
}

.collection-card::after{
    content:"";
    position:absolute;
    inset:0;
    background:linear-gradient(
        0deg,
        rgba(0,0,0,.78),
        transparent 75%
    );
}

.collection-content{
    position:absolute;
    left:12px;
    bottom:10px;
    z-index:2;
}

.collection-title{
    font-size:12px;
}

.collection-description{
    margin-top:2px;
    font-size:7px;
    color:#ddd;
}


/* =========================================================
   WHY EATERGO
========================================================= */

.why-section{
    background:#f2f2f2;
    padding:25px 0 28px;
}

.why-inner{
    width:min(var(--container),calc(100% - 36px));
    margin:auto;
}

.why-heading{
    text-align:center;
    margin-bottom:18px;
}

.small-label{
    font-size:7px;
    letter-spacing:1.5px;
    color:var(--orange);
    font-weight:800;
}

.why-heading h2{
    font-size:22px;
    margin:5px 0;
}

.why-heading h2 span{
    color:var(--orange);
}

.why-heading p{
    font-size:9px;
    color:#777;
}

.why-grid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:12px;
}

.why-card{
    background:#fff;
    border:1px solid #e4e4e4;
    border-radius:7px;
    padding:16px;
    text-align:center;
}

.why-icon{
    width:31px;
    height:31px;
    border-radius:50%;
    background:#fff1e9;
    color:var(--orange);
    display:grid;
    place-items:center;
    margin:0 auto 8px;
}

.why-icon svg{
    width:16px;
    height:16px;
}

.why-card h3{
    font-size:10px;
}

.why-card p{
    font-size:7px;
    color:#777;
    margin-top:4px;
    line-height:1.4;
}


/* =========================================================
   FOOTER
========================================================= */

.footer{
    background:#090909;
    color:#fff;
}

.footer-inner{
    width:min(var(--container),calc(100% - 36px));
    margin:auto;
    padding:28px 0;
    display:grid;
    grid-template-columns:1.6fr repeat(4,1fr);
    gap:24px;
}

.footer-logo .logo-text{
    font-size:20px;
}

.footer-logo .logo-chef{
    width:23px;
    height:23px;
}

.footer-logo .logo-chef svg{
    width:23px;
    height:23px;
}

.footer-brand > p{
    font-size:8px;
    color:#888;
    margin-top:7px;
}

.footer-column h4{
    font-size:9px;
    margin-bottom:8px;
}

.footer-column a{
    display:block;
    font-size:7px;
    color:#888;
    margin:6px 0;
}

.footer-column a:hover{
    color:var(--orange);
}

.footer-bottom{
    width:min(var(--container),calc(100% - 36px));
    margin:auto;
    border-top:1px solid #222;
    padding:12px 0;
    display:flex;
    align-items:center;
    justify-content:space-between;
}

.footer-bottom p{
    font-size:7px;
    color:#777;
}

.social-links{
    display:flex;
    gap:9px;
}

.social-links a{
    color:#aaa;
}

.social-links svg{
    width:14px;
    height:14px;
}


/* =========================================================
   MOBILE BOTTOM NAV
========================================================= */

.mobile-bottom-nav{
    display:none;
}


/* =========================================================
   TOAST
========================================================= */

.toast{
    position:fixed;
    right:18px;
    bottom:18px;
    z-index:3000;
    padding:9px 13px;
    border-radius:7px;
    background:#111;
    color:#fff;
    display:flex;
    align-items:center;
    gap:6px;
    font-size:9px;
    transform:translateY(60px);
    opacity:0;
    transition:.25s;
}

.toast.show{
    transform:none;
    opacity:1;
}

.toast-icon svg{
    width:14px;
    height:14px;
}

.toast-icon{
    display:flex;
}

.empty-state{
    grid-column:1/-1;
    padding:35px;
    text-align:center;
    background:#fff;
    border:1px dashed #ddd;
    border-radius:8px;
    color:#777;
    font-size:11px;
}


/* =========================================================
   TABLET
========================================================= */

@media(max-width:1050px){

    :root{
        --container:calc(100% - 36px);
    }

    .desktop-nav{
        gap:15px;
    }

    .header-search{
        width:210px;
    }

    .restaurant-grid,
    .dish-grid{
        grid-template-columns:repeat(3,minmax(0,1fr));
    }

    .restaurant-image,
    .dish-image{
        height:130px;
    }

    .offer-card{
        height:110px;
    }

    .offer-content h3{
        font-size:18px;
    }
}


/* =========================================================
   TABLET / MOBILE
========================================================= */

@media(max-width:800px){

    .main-header{
        height:55px;
    }

    .header-inner{
        width:calc(100% - 24px);
    }

    .header-search{
        flex:1;
        width:auto;
    }

    .desktop-nav,
    .header-actions{
        display:none;
    }

    .mobile-menu-button{
        display:block;
        margin-left:auto;
    }

    .mobile-menu{
        position:fixed;
        top:55px;
        left:0;
        right:0;
        z-index:999;
        background:#090909;
        color:#fff;
        padding:15px 18px;
        box-shadow:0 10px 25px rgba(0,0,0,.3);
    }

    .mobile-menu.open{
        display:block;
    }

    .mobile-menu > a{
        display:block;
        padding:11px 0;
        border-bottom:1px solid #282828;
        font-size:12px;
    }

    .mobile-menu-buttons{
        display:flex;
        gap:8px;
        margin-top:12px;
    }

    .mobile-menu-buttons a{
        flex:1;
    }

    .hero{
        height:245px;
    }

    .hero-inner{
        width:calc(100% - 24px);
    }

    .hero-content{
        width:100%;
    }

    .hero h1{
        font-size:34px;
    }

    .hero-search{
        width:min(100%,500px);
    }

    .category-section{
        height:90px;
        width:100%;
        padding:0 12px;
    }

    .category-container{
        overflow-x:auto;
        justify-content:flex-start;
        scrollbar-width:none;
    }

    .category-container::-webkit-scrollbar{
        display:none;
    }

    .category-card{
        flex:0 0 72px;
    }

    .category-section > .slider-next{
        display:none;
    }

    .section,
    .offers-section,
    .why-inner{
        width:calc(100% - 24px);
    }

    .restaurant-grid,
    .dish-grid{
        display:flex;
        overflow-x:auto;
        gap:10px;
        scrollbar-width:none;
        padding-bottom:4px;
    }

    .restaurant-grid::-webkit-scrollbar,
    .dish-grid::-webkit-scrollbar{
        display:none;
    }

    .restaurant-card,
    .dish-card{
        flex:0 0 205px;
    }

    .restaurant-image,
    .dish-image{
        height:125px;
    }

    .offer-grid{
        display:flex;
        overflow-x:auto;
        gap:10px;
        scrollbar-width:none;
    }

    .offer-grid::-webkit-scrollbar{
        display:none;
    }

    .offer-card{
        flex:0 0 300px;
        height:125px;
    }

    .offer-content{
        padding:18px;
    }

    .offer-content h3{
        font-size:20px;
    }

    .collection-grid{
        display:flex;
        overflow-x:auto;
        gap:10px;
        scrollbar-width:none;
    }

    .collection-grid::-webkit-scrollbar{
        display:none;
    }

    .collection-card{
        flex:0 0 280px;
    }

    .why-grid{
        grid-template-columns:repeat(2,1fr);
    }

    .footer-inner{
        width:calc(100% - 24px);
        grid-template-columns:1fr 1fr;
        gap:22px 15px;
    }

    .footer-brand{
        grid-column:1/-1;
    }

    .footer-bottom{
        width:calc(100% - 24px);
    }
}


/* =========================================================
   MOBILE
========================================================= */

@media(max-width:600px){

    body{
        padding-bottom:64px;
    }

    .logo-text{
        font-size:21px;
    }

    .logo-chef,
    .logo-chef svg{
        width:23px;
        height:23px;
    }

    .location-selector{
        display:none;
    }

    .header-search{
        height:32px;
    }

    .header-search input{
        font-size:9px;
    }

    .hero{
        height:275px;
    }

    .hero h1{
        font-size:31px;
    }

    .hero p{
        font-size:10px;
    }

    .hero-search{
        height:auto;
        min-height:42px;
        flex-wrap:wrap;
        border-radius:11px;
        padding:4px;
    }

    .hero-location{
        width:72px;
        height:32px;
        font-size:8px;
    }

    .hero-search-input{
        height:32px;
        min-width:120px;
    }

    .hero-search-input input{
        font-size:8px;
    }

    .hero-search-button{
        height:32px;
        padding:0 14px;
        font-size:8px;
    }

    .category-section{
        height:92px;
    }

    .category-image{
        width:53px;
        height:53px;
    }

    .category-card{
        flex-basis:68px;
    }

    .category-name{
        font-size:8px;
    }

    .section-header{
        height:43px;
    }

    .section-header h2{
        font-size:12px;
    }

    .view-all{
        font-size:8px;
    }

    .restaurant-card,
    .dish-card{
        flex-basis:205px;
    }

    .restaurant-image,
    .dish-image{
        height:125px;
    }

    .offer-card{
        flex-basis:300px;
    }

    .collection-card{
        flex-basis:280px;
        height:145px;
    }

    .why-section{
        padding:24px 0;
    }

    .why-grid{
        gap:9px;
    }

    .why-card{
        padding:12px 8px;
    }

    .why-card h3{
        font-size:9px;
    }

    .why-card p{
        font-size:7px;
    }

    .footer-inner{
        grid-template-columns:1fr 1fr;
    }

    .footer-bottom{
        gap:10px;
    }

    .social-links{
        gap:7px;
    }

    .mobile-bottom-nav{
        position:fixed;
        left:0;
        right:0;
        bottom:0;
        height:64px;
        z-index:2000;
        display:flex;
        background:rgba(255,255,255,.98);
        border-top:1px solid #ddd;
        box-shadow:0 -5px 18px rgba(0,0,0,.08);
    }

    .bottom-nav-item{
        position:relative;
        flex:1;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:4px;
        color:#777;
        font-size:8px;
        font-weight:700;
    }

    .bottom-nav-item svg{
        width:18px;
        height:18px;
    }

    .bottom-nav-item.active{
        color:var(--orange);
    }

    .bottom-cart-icon{
        position:relative;
        display:flex;
    }

    .bottom-cart-count{
        top:-5px;
        right:-7px;
    }

    .toast{
        left:12px;
        right:12px;
        bottom:75px;
        justify-content:center;
    }
}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media(max-width:380px){

    .hero h1{
        font-size:28px;
    }

    .restaurant-card,
    .dish-card{
        flex-basis:185px;
    }

    .offer-card{
        flex-basis:270px;
    }

    .collection-card{
        flex-basis:260px;
    }

    .logo-text{
        font-size:19px;
    }
}


/* =========================================================
   DARK MODE
   Matches scripts.js -> dark-mode
========================================================= */

body.dark-mode{
    --bg:#111;
    --text:#f3f3f3;
    background:#111;
    color:#f3f3f3;
}

.dark-mode .main-content{
    background:#111;
}

.dark-mode .category-section{
    background:#111;
}

.dark-mode .category-name,
.dark-mode .section-header h2{
    color:#eee;
}

.dark-mode .restaurant-card,
.dark-mode .dish-card,
.dark-mode .why-card{
    background:#181818;
    border-color:#292929;
}

.dark-mode .restaurant-name,
.dark-mode .dish-name{
    color:#eee;
}

.dark-mode .restaurant-cuisine,
.dark-mode .restaurant-price,
.dark-mode .dish-restaurant,
.dark-mode .restaurant-rating span:last-child{
    color:#999;
}

.dark-mode .category-section{
    border-color:#292929;
}

.dark-mode .arrows button,
.dark-mode .category-section > .slider-next{
    background:#181818;
    border-color:#333;
    color:#fff;
}

.dark-mode .why-section{
    background:#151515;
}

.dark-mode .footer{
    background:#080808;
}

.dark-mode .mobile-bottom-nav{
    background:#151515;
    border-color:#292929;
}

.dark-mode .bottom-nav-item{
    color:#aaa;
}

.dark-mode .bottom-nav-item.active{
    color:var(--orange);
}

.dark-mode .empty-state{
    background:#181818;
    border-color:#333;
    color:#aaa;
}


/* =========================================================
   IMAGE ERROR
========================================================= */

.image-error{
    opacity:.35;
    object-fit:cover;
}

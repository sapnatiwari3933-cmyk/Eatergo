/* =====================================================
   EATERGO HOME PAGE JAVASCRIPT
===================================================== */


/* =====================================================
   SEARCH
===================================================== */

const topSearch =
    document.getElementById("topSearch");

const heroSearch =
    document.getElementById("heroSearch");

const searchBtn =
    document.getElementById("searchBtn");


function performSearch(value) {

    value = value.trim();

    if (value === "") {

        alert(
            "Please search for a restaurant, dish or cuisine."
        );

        return;
    }


    /*
        Part 2 mein yahan:
        restaurants.html?search=pizza

        connect karenge.
    */

    alert(
        `Searching Eatergo for "${value}" 🔎`
    );
}


if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        function () {

            performSearch(
                heroSearch.value
            );

        }
    );

}


if (heroSearch) {

    heroSearch.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                performSearch(
                    heroSearch.value
                );

            }

        }
    );

}


if (topSearch) {

    topSearch.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                performSearch(
                    topSearch.value
                );

            }

        }
    );

}


/* =====================================================
   CATEGORY SELECTION
===================================================== */

const categories =
    document.querySelectorAll(".category");


categories.forEach(function(category) {

    category.addEventListener(
        "click",
        function() {

            categories.forEach(function(item) {

                item.classList.remove("active");

            });


            this.classList.add("active");


            const categoryName =
                this.querySelector("span")
                .textContent;


            /*
                Later this will open
                filtered restaurant results.
            */

            alert(
                `Showing ${categoryName} restaurants 🍽️`
            );

        }
    );

});


/* =====================================================
   CATEGORY HORIZONTAL SCROLL
===================================================== */

const categoryContainer =
    document.getElementById("categories");


const categoryLeft =
    document.getElementById("categoryLeft");


const categoryRight =
    document.getElementById("categoryRight");


if (categoryLeft) {

    categoryLeft.addEventListener(
        "click",
        function() {

            categoryContainer.scrollBy({
                left: -200,
                behavior: "smooth"
            });

        }
    );

}


if (categoryRight) {

    categoryRight.addEventListener(
        "click",
        function() {

            categoryContainer.scrollBy({
                left: 200,
                behavior: "smooth"
            });

        }
    );

}


/* =====================================================
   FAVOURITES
===================================================== */

const hearts =
    document.querySelectorAll(".heart");


hearts.forEach(function(heart) {

    heart.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            event.stopPropagation();


            this.classList.toggle("liked");


            if (
                this.classList.contains("liked")
            ) {

                this.textContent = "♥";

            } else {

                this.textContent = "♡";

            }

        }
    );

});


/* =====================================================
   POPULAR DISH FAVOURITES
===================================================== */

const dishButtons =
    document.querySelectorAll(
        ".dish-image button"
    );


dishButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            if (this.textContent === "♡") {

                this.textContent = "♥";

                this.style.color =
                    "#ff3b30";

            } else {

                this.textContent = "♡";

                this.style.color =
                    "white";

            }

        }
    );

});


/* =====================================================
   HEADER FAVOURITE
===================================================== */

const favBtn =
    document.getElementById("favBtn");


if (favBtn) {

    favBtn.addEventListener(
        "click",
        function() {

            if (
                this.textContent.trim() === "♡"
            ) {

                this.textContent = "♥";

                this.style.color =
                    "#ff3b30";

            } else {

                this.textContent = "♡";

                this.style.color =
                    "white";

            }

        }
    );

}


/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeBtn =
    document.getElementById("themeBtn");


if (themeBtn) {

    themeBtn.addEventListener(
        "click",
        function() {

            document.body.classList.toggle(
                "dark"
            );


            if (
                document.body.classList.contains(
                    "dark"
                )
            ) {

                this.textContent = "🌙";

                localStorage.setItem(
                    "eatergoTheme",
                    "dark"
                );

            } else {

                this.textContent = "☀️";

                localStorage.setItem(
                    "eatergoTheme",
                    "light"
                );

            }

        }
    );

}


/* =====================================================
   LOAD SAVED THEME
===================================================== */

const savedTheme =
    localStorage.getItem(
        "eatergoTheme"
    );


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    if (themeBtn) {
        themeBtn.textContent = "🌙";
    }

}


/* =====================================================
   LOCATION
===================================================== */

const locationBtn =
    document.getElementById(
        "locationBtn"
    );


if (locationBtn) {

    locationBtn.addEventListener(
        "click",
        function() {

            const newLocation =
                prompt(
                    "Enter your city:",
                    "Surat"
                );


            if (
                newLocation &&
                newLocation.trim() !== ""
            ) {

                document.getElementById(
                    "locationText"
                ).textContent =
                    newLocation.trim();

            }

        }
    );

}


/* =====================================================
   OFFER SLIDER
===================================================== */

const offersGrid =
    document.querySelector(
        ".offers-grid"
    );


const offerNext =
    document.getElementById(
        "offerNext"
    );


const offerPrev =
    document.getElementById(
        "offerPrev"
    );


if (offerNext) {

    offerNext.addEventListener(
        "click",
        function() {

            offersGrid.scrollBy({
                left: 350,
                behavior: "smooth"
            });

        }
    );

}


if (offerPrev) {

    offerPrev.addEventListener(
        "click",
        function() {

            offersGrid.scrollBy({
                left: -350,
                behavior: "smooth"
            });

        }
    );

}


/* =====================================================
   CART
===================================================== */

let cartCount = 2;


const cartButton =
    document.querySelector(
        ".cart-btn"
    );


if (cartButton) {

    cartButton.addEventListener(
        "click",
        function() {

            alert(
                `You have ${cartCount} items in your cart 🛒`
            );

        }
    );

}


/* =====================================================
   CONSOLE
===================================================== */

console.log(
    "🍽️ Eatergo loaded successfully!"
);

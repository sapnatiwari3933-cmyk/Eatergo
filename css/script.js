/* =========================================================
   EATERGO - MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   DATA
========================================================= */

const categories = [
    {
        name: "All",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=300&q=80"
    },
    {
        name: "Pizza",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=300&q=80"
    },
    {
        name: "Burgers",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80"
    },
    {
        name: "Indian",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=300&q=80"
    },
    {
        name: "Chinese",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=300&q=80"
    },
    {
        name: "Biryani",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=300&q=80"
    },
    {
        name: "Cafe",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=300&q=80"
    },
    {
        name: "Desserts",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=300&q=80"
    },
    {
        name: "Healthy Food",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80"
    }
];


const restaurants = [
    {
        id: 1,
        name: "The Urban Kitchen",
        cuisine: "North Indian • Chinese",
        rating: 4.7,
        reviews: 1240,
        price: "₹450 for two",
        delivery: "25-30 min",
        distance: "1.2 km",
        offer: "40% OFF",
        badge: "Bestseller",
        category: ["Indian", "Chinese"],
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 2,
        name: "La Pino's Pizza",
        cuisine: "Pizza • Italian",
        rating: 4.6,
        reviews: 980,
        price: "₹500 for two",
        delivery: "20-25 min",
        distance: "1.8 km",
        offer: "30% OFF",
        badge: "Popular",
        category: ["Pizza"],
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 3,
        name: "Burger Singh",
        cuisine: "Burgers • Fast Food",
        rating: 4.5,
        reviews: 875,
        price: "₹350 for two",
        delivery: "20-25 min",
        distance: "2.1 km",
        offer: "25% OFF",
        badge: "Popular",
        category: ["Burgers"],
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 4,
        name: "Biryani Blues",
        cuisine: "Biryani • Mughlai",
        rating: 4.8,
        reviews: 1560,
        price: "₹550 for two",
        delivery: "25-30 min",
        distance: "1.5 km",
        offer: "₹125 OFF",
        badge: "Top Rated",
        category: ["Biryani", "Indian"],
        image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 5,
        name: "Wok This Way",
        cuisine: "Chinese • Asian",
        rating: 4.4,
        reviews: 720,
        price: "₹400 for two",
        delivery: "25-30 min",
        distance: "2.4 km",
        offer: "20% OFF",
        badge: "New",
        category: ["Chinese"],
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 6,
        name: "Green Bowl Cafe",
        cuisine: "Healthy • Salads • Cafe",
        rating: 4.7,
        reviews: 640,
        price: "₹450 for two",
        delivery: "15-20 min",
        distance: "1.9 km",
        offer: "15% OFF",
        badge: "Healthy",
        category: ["Healthy Food", "Cafe"],
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=85"
    }
];


const offers = [
    {
        title: "Up to 50% OFF",
        subtitle: "On your first order",
        button: "ORDER NOW",
        className: "",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=85"
    },

    {
        title: "Flat ₹125 OFF",
        subtitle: "Use code EATER125",
        button: "COPY CODE",
        className: "light-offer",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85"
    },

    {
        title: "Free Delivery",
        subtitle: "On selected restaurants",
        button: "EXPLORE",
        className: "green-offer",
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=85"
    }
];


const dishes = [
    {
        id: 101,
        name: "Butter Chicken",
        restaurant: "The Urban Kitchen",
        category: "Indian",
        price: 289,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=85"
    },

    {
        id: 102,
        name: "Margherita Pizza",
        restaurant: "La Pino's Pizza",
        category: "Pizza",
        price: 249,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=85"
    },

    {
        id: 103,
        name: "Chicken Burger",
        restaurant: "Burger Singh",
        category: "Burgers",
        price: 199,
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=600&q=85"
    },

    {
        id: 104,
        name: "Hyderabadi Biryani",
        restaurant: "Biryani Blues",
        category: "Biryani",
        price: 319,
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=85"
    },

    {
        id: 105,
        name: "Veg Hakka Noodles",
        restaurant: "Wok This Way",
        category: "Chinese",
        price: 229,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=85"
    },

    {
        id: 106,
        name: "Avocado Power Bowl",
        restaurant: "Green Bowl Cafe",
        category: "Healthy Food",
        price: 279,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=85"
    }
];


const collections = [
    {
        title: "Best of Indian",
        description: "Rich flavours & authentic recipes",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85"
    },

    {
        title: "Late Night Cravings",
        description: "Food that hits different at night",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85"
    },

    {
        title: "Healthy & Fresh",
        description: "Fresh food for a better you",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=85"
    }
];


/* =========================================================
   STATE
========================================================= */

let selectedCategory = "All";

let cart = JSON.parse(
    localStorage.getItem("eatergoCart")
) || [];

let favourites = JSON.parse(
    localStorage.getItem("eatergoFavourites")
) || [];


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    renderCategories();

    renderRestaurants();

    renderOffers();

    renderDishes();

    renderCollections();

    updateCartCount();

    setupSearch();

    setupTheme();

    setupMobileMenu();

    setupLocationButtons();

    setupHeaderButtons();

    setupOfferSlider();

});


/* =========================================================
   CATEGORIES
========================================================= */

function renderCategories() {

    const container =
        document.getElementById("categoryContainer");

    if (!container) return;


    container.innerHTML = categories.map(category => {

        const active =
            category.name === selectedCategory
                ? "active"
                : "";


        return `
            <button
                class="category-card ${active}"
                data-category="${category.name}"
                type="button"
            >

                <div class="category-image">

                    <img
                        src="${category.image}"
                        alt="${category.name}"
                        loading="lazy"
                    >

                </div>

                <span class="category-name">
                    ${category.name}
                </span>

            </button>
        `;

    }).join("");


    container
        .querySelectorAll(".category-card")
        .forEach(button => {

            button.addEventListener("click", () => {

                selectedCategory =
                    button.dataset.category;

                renderCategories();

                renderRestaurants();

                renderDishes();

                scrollToSection("restaurantGrid");

            });

        });
}


/* =========================================================
   RESTAURANTS
========================================================= */

function renderRestaurants() {

    const grid =
        document.getElementById("restaurantGrid");

    if (!grid) return;


    let filteredRestaurants;


    if (selectedCategory === "All") {

        filteredRestaurants = restaurants;

    } else {

        filteredRestaurants =
            restaurants.filter(restaurant =>
                restaurant.category.includes(
                    selectedCategory
                )
            );

    }


    if (filteredRestaurants.length === 0) {

        grid.innerHTML = `
            <div class="empty-state">
                No restaurants found.
            </div>
        `;

        return;
    }


    grid.innerHTML =
        filteredRestaurants.map(
            restaurant => createRestaurantCard(restaurant)
        ).join("");


    setupFavouriteButtons();
}


/* =========================================================
   RESTAURANT CARD
========================================================= */

function createRestaurantCard(restaurant) {

    const isFavourite =
        favourites.includes(restaurant.id);


    return `
        <article
            class="restaurant-card"
            data-id="${restaurant.id}"
        >

            <div class="restaurant-image">

                <img
                    src="${restaurant.image}"
                    alt="${restaurant.name}"
                    loading="lazy"
                >


                <span class="restaurant-badge">
                    ${restaurant.badge}
                </span>


                <button
                    class="restaurant-favourite ${isFavourite ? "active" : ""}"
                    data-favourite="${restaurant.id}"
                    aria-label="Add to favourites"
                    type="button"
                >

                    <svg viewBox="0 0 24 24">

                        <path d="M20.8 8.8c0 5-8.8 10.2-8.8 10.2S3.2 13.8 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z"/>

                    </svg>

                </button>

            </div>


            <div class="restaurant-info">

                <h3 class="restaurant-name">
                    ${restaurant.name}
                </h3>


                <div class="restaurant-rating">

                    <span class="rating-star">
                        ★
                    </span>

                    ${restaurant.rating}

                    <span>
                        (${restaurant.reviews})
                    </span>

                </div>


                <div class="restaurant-cuisine">
                    ${restaurant.cuisine}
                </div>


                <div class="restaurant-price">
                    ${restaurant.price}
                </div>


                <div class="restaurant-meta">

                    <span class="restaurant-delivery">

                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="8"/>
                            <path d="M12 7v5l3 2"/>
                        </svg>

                        ${restaurant.delivery}

                    </span>


                    <span class="restaurant-offer">
                        ${restaurant.offer}
                    </span>

                </div>

            </div>

        </article>
    `;
}


/* =========================================================
   FAVOURITES
========================================================= */

function setupFavouriteButtons() {

    document
        .querySelectorAll("[data-favourite]")
        .forEach(button => {

            button.addEventListener("click", event => {

                event.stopPropagation();


                const id =
                    Number(button.dataset.favourite);


                if (favourites.includes(id)) {

                    favourites =
                        favourites.filter(
                            item => item !== id
                        );

                    button.classList.remove("active");

                    showToast(
                        "Removed from favourites"
                    );

                } else {

                    favourites.push(id);

                    button.classList.add("active");

                    showToast(
                        "Added to favourites"
                    );
                }


                localStorage.setItem(
                    "eatergoFavourites",
                    JSON.stringify(favourites)
                );

            });

        });
}


/* =========================================================
   OFFERS
========================================================= */

function renderOffers() {

    const grid =
        document.getElementById("offerGrid");

    if (!grid) return;


    grid.innerHTML =
        offers.map((offer, index) => {

            return `
                <article
                    class="offer-card ${offer.className}"
                >

                    <img
                        src="${offer.image}"
                        alt="${offer.title}"
                        loading="lazy"
                    >


                    <div class="offer-content">

                        <h3 class="offer-title">
                            ${offer.title}
                        </h3>

                        <p class="offer-subtitle">
                            ${offer.subtitle}
                        </p>

                        <button
                            class="offer-button"
                            type="button"
                            data-offer="${index}"
                        >
                            ${offer.button}
                        </button>

                    </div>

                </article>
            `;

        }).join("");


    document
        .querySelectorAll("[data-offer]")
        .forEach(button => {

            button.addEventListener("click", () => {

                const index =
                    Number(button.dataset.offer);

                const offer = offers[index];

                if (offer.button === "COPY CODE") {

                    copyCoupon();

                } else {

                    showToast(
                        "Opening offer..."
                    );

                }

            });

        });
}


/* =========================================================
   COPY COUPON
========================================================= */

function copyCoupon() {

    const code = "EATER125";


    if (
        navigator.clipboard &&
        window.isSecureContext
    ) {

        navigator.clipboard
            .writeText(code)
            .then(() => {

                showToast(
                    `${code} copied`
                );

            })
            .catch(() => {

                showToast(
                    `Coupon: ${code}`
                );

            });

    } else {

        showToast(
            `Coupon: ${code}`
        );

    }
}


/* =========================================================
   DISHES
========================================================= */

function renderDishes() {

    const grid =
        document.getElementById("dishGrid");

    if (!grid) return;


    let filteredDishes;


    if (selectedCategory === "All") {

        filteredDishes = dishes;

    } else {

        filteredDishes =
            dishes.filter(
                dish =>
                    dish.category === selectedCategory
            );

    }


    if (filteredDishes.length === 0) {

        grid.innerHTML = `
            <div class="empty-state">
                No dishes found.
            </div>
        `;

        return;
    }


    grid.innerHTML =
        filteredDishes.map(
            dish => createDishCard(dish)
        ).join("");


    setupDishButtons();
}


/* =========================================================
   DISH CARD
========================================================= */

function createDishCard(dish) {

    return `
        <article
            class="dish-card"
            data-dish-id="${dish.id}"
        >

            <div class="dish-image">

                <img
                    src="${dish.image}"
                    alt="${dish.name}"
                    loading="lazy"
                >


                <button
                    class="dish-heart"
                    aria-label="Favourite dish"
                    type="button"
                >

                    <svg viewBox="0 0 24 24">
                        <path d="M20.8 8.8c0 5-8.8 10.2-8.8 10.2S3.2 13.8 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z"/>
                    </svg>

                </button>

            </div>


            <div class="dish-info">

                <h3 class="dish-name">
                    ${dish.name}
                </h3>


                <p class="dish-restaurant">
                    ${dish.restaurant}
                </p>


                <div class="dish-bottom">

                    <span class="dish-price">
                        ₹${dish.price}
                    </span>


                    <button
                        class="add-dish-button"
                        type="button"
                        data-dish="${dish.id}"
                    >
                        ADD +
                    </button>

                </div>

            </div>

        </article>
    `;
}


/* =========================================================
   DISH BUTTONS
========================================================= */

function setupDishButtons() {

    document
        .querySelectorAll("[data-dish]")
        .forEach(button => {

            button.addEventListener("click", event => {

                event.stopPropagation();


                const id =
                    Number(button.dataset.dish);


                const dish =
                    dishes.find(
                        item => item.id === id
                    );


                if (!dish) return;


                addToCart({
                    id: dish.id,
                    name: dish.name,
                    price: dish.price,
                    image: dish.image,
                    restaurant: dish.restaurant,
                    quantity: 1
                });

            });

        });


    document
        .querySelectorAll(".dish-heart")
        .forEach(button => {

            button.addEventListener("click", event => {

                event.stopPropagation();

                button.classList.toggle("active");

            });

        });

}


/* =========================================================
   CART
========================================================= */

function addToCart(item) {

    const existing =
        cart.find(
            cartItem => cartItem.id === item.id
        );


    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push(item);

    }


    localStorage.setItem(
        "eatergoCart",
        JSON.stringify(cart)
    );


    updateCartCount();

    showToast(
        `${item.name} added to cart`
    );
}


/* =========================================================
   CART COUNT
========================================================= */

function updateCartCount() {

    const total =
        cart.reduce(
            (sum, item) =>
                sum + Number(item.quantity || 0),
            0
        );


    const desktopCount =
        document.getElementById("cartCount");

    const mobileCount =
        document.getElementById("mobileCartCount");


    if (desktopCount) {

        desktopCount.textContent = total;

        desktopCount.style.display =
            total > 0 ? "flex" : "none";
    }


    if (mobileCount) {

        mobileCount.textContent = total;

        mobileCount.style.display =
            total > 0 ? "flex" : "none";
    }
}


/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {

    const headerSearch =
        document.getElementById("headerSearch");

    const heroSearch =
        document.getElementById("heroSearch");

    const heroSearchBtn =
        document.getElementById("heroSearchBtn");


    if (headerSearch) {

        headerSearch.addEventListener(
            "keydown",
            event => {

                if (event.key === "Enter") {

                    performSearch(
                        headerSearch.value
                    );

                }

            }
        );

    }


    if (heroSearch) {

        heroSearch.addEventListener(
            "keydown",
            event => {

                if (event.key === "Enter") {

                    performSearch(
                        heroSearch.value
                    );

                }

            }
        );

    }


    if (heroSearchBtn) {

        heroSearchBtn.addEventListener(
            "click",
            () => {

                performSearch(
                    heroSearch?.value || ""
                );

            }
        );

    }

}


/* =========================================================
   PERFORM SEARCH
========================================================= */

function performSearch(value) {

    const search =
        value.trim().toLowerCase();


    if (!search) {

        showToast(
            "Please enter something to search"
        );

        return;
    }


    const restaurantMatches =
        restaurants.filter(restaurant => {

            return (
                restaurant.name
                    .toLowerCase()
                    .includes(search)

                ||

                restaurant.cuisine
                    .toLowerCase()
                    .includes(search)

                ||

                restaurant.category.some(
                    category =>
                        category
                            .toLowerCase()
                            .includes(search)
                )
            );

        });


    const dishMatches =
        dishes.filter(dish => {

            return (
                dish.name
                    .toLowerCase()
                    .includes(search)

                ||

                dish.restaurant
                    .toLowerCase()
                    .includes(search)

                ||

                dish.category
                    .toLowerCase()
                    .includes(search)
            );

        });


    if (
        restaurantMatches.length === 0 &&
        dishMatches.length === 0
    ) {

        showToast(
            `No results for "${value}"`
        );

        return;
    }


    if (restaurantMatches.length > 0) {

        renderSearchRestaurants(
            restaurantMatches
        );

    }


    if (dishMatches.length > 0) {

        renderSearchDishes(
            dishMatches
        );

    }


    scrollToSection("restaurantGrid");


    showToast(
        `${restaurantMatches.length + dishMatches.length} results found`
    );
}


/* =========================================================
   SEARCH RESTAURANTS
========================================================= */

function renderSearchRestaurants(results) {

    const grid =
        document.getElementById("restaurantGrid");

    if (!grid) return;


    grid.innerHTML =
        results.map(
            restaurant =>
                createRestaurantCard(restaurant)
        ).join("");


    setupFavouriteButtons();
}


/* =========================================================
   SEARCH DISHES
========================================================= */

function renderSearchDishes(results) {

    const grid =
        document.getElementById("dishGrid");

    if (!grid) return;


    grid.innerHTML =
        results.map(
            dish =>
                createDishCard(dish)
        ).join("");


    setupDishButtons();
}


/* =========================================================
   COLLECTIONS
========================================================= */

function renderCollections() {

    const grid =
        document.getElementById("collectionGrid");

    if (!grid) return;


    grid.innerHTML =
        collections.map(collection => {

            return `
                <article class="collection-card">

                    <img
                        src="${collection.image}"
                        alt="${collection.title}"
                        loading="lazy"
                    >


                    <div class="collection-content">

                        <h3 class="collection-title">
                            ${collection.title}
                        </h3>

                        <p class="collection-description">
                            ${collection.description}
                        </p>

                    </div>

                </article>
            `;

        }).join("");
}


/* =========================================================
   THEME
========================================================= */

function setupTheme() {

    const themeButton =
        document.getElementById("themeBtn");

    if (!themeButton) return;


    const savedTheme =
        localStorage.getItem("eatergoTheme");


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );

    }


    themeButton.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark-mode"
            );


            const isDark =
                document.body.classList.contains(
                    "dark-mode"
                );


            localStorage.setItem(
                "eatergoTheme",
                isDark ? "dark" : "light"
            );


            showToast(
                isDark
                    ? "Dark mode enabled"
                    : "Light mode enabled"
            );

        }
    );
}


/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileMenu() {

    const button =
        document.getElementById("mobileMenuBtn");

    const menu =
        document.getElementById("mobileMenu");


    if (!button || !menu) return;


    button.addEventListener(
        "click",
        () => {

            menu.classList.toggle("open");

        }
    );


    menu
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    menu.classList.remove(
                        "open"
                    );

                }
            );

        });

}


/* =========================================================
   LOCATION
========================================================= */

function setupLocationButtons() {

    const locationButtons = [
        document.getElementById("locationBtn"),
        document.getElementById("heroLocationBtn")
    ];


    locationButtons.forEach(button => {

        if (!button) return;


        button.addEventListener(
            "click",
            () => {

                const location =
                    prompt(
                        "Enter your location",
                        "Surat"
                    );


                if (
                    location &&
                    location.trim()
                ) {

                    const cleanLocation =
                        location.trim();


                    const currentLocation =
                        document.getElementById(
                            "currentLocation"
                        );

                    const heroLocation =
                        document.getElementById(
                            "heroLocation"
                        );


                    if (currentLocation) {

                        currentLocation.textContent =
                            cleanLocation;

                    }


                    if (heroLocation) {

                        heroLocation.textContent =
                            cleanLocation;

                    }


                    localStorage.setItem(
                        "eatergoLocation",
                        cleanLocation
                    );


                    showToast(
                        `Location changed to ${cleanLocation}`
                    );

                }

            }
        );

    });


    const savedLocation =
        localStorage.getItem(
            "eatergoLocation"
        );


    if (savedLocation) {

        const currentLocation =
            document.getElementById(
                "currentLocation"
            );

        const heroLocation =
            document.getElementById(
                "heroLocation"
            );


        if (currentLocation) {

            currentLocation.textContent =
                savedLocation;

        }


        if (heroLocation) {

            heroLocation.textContent =
                savedLocation;

        }

    }

}


/* =========================================================
   HEADER BUTTONS
========================================================= */

function setupHeaderButtons() {

    const wishlist =
        document.getElementById("wishlistBtn");

    const cartButton =
        document.getElementById("cartBtn");


    if (wishlist) {

        wishlist.addEventListener(
            "click",
            () => {

                showToast(
                    favourites.length > 0
                        ? `${favourites.length} favourite items`
                        : "No favourite items yet"
                );

            }
        );

    }


    if (cartButton) {

        cartButton.addEventListener(
            "click",
            () => {

                window.location.href =
                    "cart.html";

            }
        );

    }

}


/* =========================================================
   OFFER SLIDER
========================================================= */

function setupOfferSlider() {

    const grid =
        document.getElementById("offerGrid");

    const previous =
        document.getElementById("offerPrev");

    const next =
        document.getElementById("offerNext");


    if (!grid) return;


    if (previous) {

        previous.addEventListener(
            "click",
            () => {

                grid.scrollBy({
                    left: -300,
                    behavior: "smooth"
                });

            }
        );

    }


    if (next) {

        next.addEventListener(
            "click",
            () => {

                grid.scrollBy({
                    left: 300,
                    behavior: "smooth"
                });

            }
        );

    }

}


/* =========================================================
   TOAST
========================================================= */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById("toast");

    const toastMessage =
        document.getElementById(
            "toastMessage"
        );


    if (!toast || !toastMessage) return;


    toastMessage.textContent = message;


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2500);
}


/* =========================================================
   SCROLL TO SECTION
========================================================= */

function scrollToSection(id) {

    const element =
        document.getElementById(id);

    if (!element) return;


    const headerHeight = 60;


    const position =
        element.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;


    window.scrollTo({
        top: position,
        behavior: "smooth"
    });
}


/* =========================================================
   GLOBAL IMAGE ERROR HANDLER
========================================================= */

document.addEventListener(
    "error",
    event => {

        if (
            event.target &&
            event.target.tagName === "IMG"
        ) {

            event.target.style.background =
                "#eeeeee";

        }

    },
    true
);

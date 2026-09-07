function renderCategories() {

    const container =
        document.getElementById("categoryContainer");

    container.innerHTML = categories.map(category => `

        <button
            class="category-card
            ${category.name === selectedCategory ? "active" : ""}"
            data-category="${category.name}"
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

    `).join("");


    document
        .querySelectorAll(".category-card")
        .forEach(button => {

            button.addEventListener("click", () => {

                selectedCategory =
                    button.dataset.category;

                renderCategories();
                renderRestaurants();
                renderDishes();

            });

        });

}

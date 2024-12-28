const recipes = [
    {
        name: "Hyderabadi Biryani",
        image: "thumb__1200_0_0_0_auto.jpg",
        ingredients: "Basmati rice, chicken, spices",
        instructions: "Marinate chicken, layer with cooked rice, and cook on low flame."
    },
    {
        name: "Butter Chicken",
        image: "https://images.app.goo.gl/emF6uBAZPaSL5mGh6",
        ingredients: "Chicken, cream, butter, spices",
        instructions: "Cook chicken, prepare tomato-based creamy gravy, combine and simmer."
    },
    {
        name: "Masala Dosa",
        image: "https://images.app.goo.gl/AL7G9Phf3Uq5PHit5",
        ingredients: "Rice, lentils, potatoes, spices",
        instructions: "Ferment rice-lentil batter, make dosa, and stuff with spicy potato filling."
    },
    {
        name: "Gulab Jamun",
        image: "https://images.app.goo.gl/AL7G9Phf3Uq5PHit5",
        ingredients: "Milk powder, sugar, cardamom",
        instructions: "Fry dough balls, soak in sugar syrup."
    },
    {
        name: "Pani Puri",
        image: "https://images.app.goo.gl/mHQuC4zJ5EkqYm7W9",
        ingredients: "Semolina, tamarind, spices",
        instructions: "Make puris, prepare tangy water, fill and serve."
    },
    {
        name: "Palak Paneer",
        image: "https://images.app.goo.gl/mTxgmqMi26BaG4cu6",
        ingredients: "Spinach, paneer, spices",
        instructions: "Blanch spinach, blend into puree, add spices and paneer."
    },
    {
        name: "Aloo Gobi",
        image: "https://images.app.goo.gl/pbK2mCG744zap3qo6",
        ingredients: "Potatoes, cauliflower, spices",
        instructions: "Saute potatoes and cauliflower, add spices and cook until tender."
    },
    {
        name: "Veg Pulao",
        image: "https://images.app.goo.gl/Ucji9Ks5EdPTZbGa6",
        ingredients: "Rice, mixed vegetables, spices",
        instructions: "Cook rice with sautÃ©ed vegetables and spices."
    },
    {
        name: "Paneer Tikka",
        image: "https://images.app.goo.gl/2WAqbtX5Ze3TmGrMA",
        ingredients: "Paneer, yogurt, spices",
        instructions: "Marinate paneer, skewer and grill or bake until golden."
    },
    {
        name: "Malai Kofta",
        image: "https://images.app.goo.gl/UQkUzo1c9z8gXwms7",
        ingredients: "Paneer, potatoes, cream, spices",
        instructions: "Prepare kofta balls, fry and serve with creamy gravy."
    }
];

const recipeList = document.getElementById("recipe-list");

recipes.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}">
        <h3>${recipe.name}</h3>
        <button onclick="toggleDetails(this)">View Recipe</button>
        <div class="recipe-details">
            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        </div>
    `;
    recipeList.appendChild(card);
});

function toggleDetails(button) {
    const details = button.nextElementSibling;
    details.style.display = details.style.display === "block" ? "none" : "block";
}

function searchRecipes() {
    const searchQuery = document.getElementById("searchBar").value.toLowerCase();
    const recipeCards = document.querySelectorAll('.recipe-card');

    recipeCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = title.includes(searchQuery) ? "block" : "none";
    });
}

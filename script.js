const recipes = [
    {
        name: "Hyderabadi Biryani",
        image: "https://via.placeholder.com/300x150?text=Hyderabadi+Biryani",
        ingredients: "Basmati rice, chicken, spices",
        instructions: "Marinate chicken, layer with cooked rice, and cook on low flame."
    },
    {
        name: "Butter Chicken",
        image: "https://via.placeholder.com/300x150?text=Butter+Chicken",
        ingredients: "Chicken, cream, butter, spices",
        instructions: "Cook chicken, prepare tomato-based creamy gravy, combine and simmer."
    },
    {
        name: "Masala Dosa",
        image: "https://via.placeholder.com/300x150?text=Masala+Dosa",
        ingredients: "Rice, lentils, potatoes, spices",
        instructions: "Ferment rice-lentil batter, make dosa, and stuff with spicy potato filling."
    },
    {
        name: "Gulab Jamun",
        image: "https://via.placeholder.com/300x150?text=Gulab+Jamun",
        ingredients: "Milk powder, sugar, cardamom",
        instructions: "Fry dough balls, soak in sugar syrup."
    },
    {
        name: "Pani Puri",
        image: "https://via.placeholder.com/300x150?text=Pani+Puri",
        ingredients: "Semolina, tamarind, spices",
        instructions: "Make puris, prepare tangy water, fill and serve."
    },
    {
        name: "Palak Paneer",
        image: "https://via.placeholder.com/300x150?text=Palak+Paneer",
        ingredients: "Spinach, paneer, spices",
        instructions: "Blanch spinach, blend into puree, add spices and paneer."
    },
    {
        name: "Aloo Gobi",
        image: "https://via.placeholder.com/300x150?text=Aloo+Gobi",
        ingredients: "Potatoes, cauliflower, spices",
        instructions: "Saute potatoes and cauliflower, add spices and cook until tender."
    },
    {
        name: "Veg Pulao",
        image: "https://via.placeholder.com/300x150?text=Veg+Pulao",
        ingredients: "Rice, mixed vegetables, spices",
        instructions: "Cook rice with sautéed vegetables and spices."
    },
    {
        name: "Paneer Tikka",
        image: "https://via.placeholder.com/300x150?text=Paneer+Tikka",
        ingredients: "Paneer, yogurt, spices",
        instructions: "Marinate paneer, skewer and grill or bake until golden."
    },
    {
        name: "Malai Kofta",
        image: "https://via.placeholder.com/300x150?text=Malai+Kofta",
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

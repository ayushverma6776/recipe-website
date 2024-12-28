const recipes = [
    { 
        name: "Vegetable Biryani", 
        image: "https://via.placeholder.com/300x150?text=Vegetable+Biryani",
        ingredients: "Rice, mixed vegetables, yogurt, spices",
        instructions: "Cook vegetables with spices, layer with rice, and steam together."
    },
    { 
        name: "Paneer Butter Masala", 
        image: "https://via.placeholder.com/300x150?text=Paneer+Butter+Masala",
        ingredients: "Paneer, tomatoes, butter, cream, spices",
        instructions: "Prepare tomato-based gravy, add spices and paneer, cook with cream."
    },
    // Add the rest of your recipes here
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

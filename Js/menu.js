async function fetchCategories() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await response.json();
    const categoriesDiv = document.getElementById('categories');

    data.categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.innerHTML = `
            <h2>${category.strCategory}</h2>
            <img src="${category.strCategoryThumb}" alt="${category.strCategory}" width="200">
            
        `;
        categoriesDiv.appendChild(categoryElement);
    });
}

fetchCategories();
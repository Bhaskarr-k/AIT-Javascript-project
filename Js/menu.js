async function fetchData() {
    try {

    
        showLoading(true);
        const mealfinder = await fetch("ttps://www.themealdb.com/api.php");
        const meal = await mealfinder.json()

        displaymeal(meal);

    }catch{
        console.error("error fetching data:", error);

    }
    finally{
        showLoading(false);

    }


} 
function displaymeal(meal) {
    const  mealcontainer = document.getElementById("categories");
    mealcontainer.innerHTML = 


    meal.forEach(meals => {

        const mealselement = document.createElement("div");
        mealselement.classList.add("meals");

        const mealsName = document.createElement("h2")
        mealsName.textContent = meals.name;


    })
}

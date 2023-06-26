const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const recipeContainer = document.querySelector('recipeContainer');

const fetchRecipes = async (query) => {
     const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
     const response = await data.json();
     console.log(response);
     
    }

searchBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const searchInput = searchBox.Value.trim();
    fetchRecipes();
   
});
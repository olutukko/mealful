import RecipeList from '../utils/RecipeList';

class RecipesListService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiUrl = 'https://api.spoonacular.com/recipes';
  }

  async fetchRecipes(criteria) {
    const url = `${this.apiUrl}/${criteria}&apiKey=${this.apiKey}`;
    console.log(url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      let recipes = []; // Initialize an empty array
      if (data.results) { // Check if data.results is defined
        recipes = data.results.map((result) => {
          console.log('Mapping recipe:', result);  // Log each recipe data before returning
          return new RecipeList(result.id, result.title, result.image);
        });
      }
      
      return recipes;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw error;
    }
  }
}

export default RecipesListService;
import RecipeInfo from '../utils/RecipeInfo';

class RecipesInfoService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiUrl = 'https://api.spoonacular.com/recipes';
  }

  async fetchRecipeById(id) {
    const url = `${this.apiUrl}/${id}/information?apiKey=${this.apiKey}`;
    console.log(url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('Fetched recipe data:', data);
      // Create a new RecipeInfo object with the necessary data
      const recipeInfo = new RecipeInfo({
        id: data.id,
        title: data.title,
        vegetarian: data.vegetarian,
        vegan: data.vegan,
        extendedIngredients: data.extendedIngredients,
        analyzedInstructions: data.analyzedInstructions
      });
      return recipeInfo;
    } catch (error) {
      console.error('Error fetching recipe:', error);
      throw error;
    }
  }
}

export default RecipesInfoService;
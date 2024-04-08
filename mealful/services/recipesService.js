import Recipe from '../utils/Recipe';

class RecipesService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiUrl = 'https://api.spoonacular.com/recipes';
  }

  async fetchRecipes(criteria) {
    const url = `${this.apiUrl}/${criteria}?apiKey=${this.apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const recipes = data.results.map((result) => {
        return new Recipe(result.id, result.title, result.image);
      });
      
      return recipes;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw error;
    }
  }
}

export default RecipesService;
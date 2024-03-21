
class RecipesService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiUrl = 'https://example-api.com/recipes';
  }

  async fetchRecipes(criteria) {
    const url = `${this.apiUrl}?apiKey=${this.apiKey}&criteria=${criteria}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw error;
    }
  }
}

module.exports = RecipesService;

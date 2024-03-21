class SearchCriteria {
    constructor() {
      this.criteria = {
        diet: null,
        ingredients: [],
        allergens: [],
        keywords: [],
      };
    }
  
    setDiet(diet) {
      this.criteria.diet = diet;
    }
  
    addIngredient(ingredient) {
      this.criteria.ingredients.push(ingredient);
    }

    removeIngredient(ingredient) {
      this.criteria.ingredients = this.criteria.ingredients.filter(i => i !== ingredient);
    }

    setAllergen(allergen) {
      this.criteria.allergens.push(allergen);
    }

    removeAllergen(allergen) {
      this.criteria.allergens = this.criteria.allergens.filter(a => a !== allergen);
    }

    setKeyword(keyword) {
      this.criteria.keywords.push(keyword);
    }

    removeKeyword(keyword) {
      this.criteria.keywords = this.criteria.keywords.filter(k => k !== keyword);
    }
  
  
    toQueryString() {
      //TODO: implement this method
      let queryString = '';
      if (this.criteria.diet) {
        queryString += `diet=${this.criteria.diet}&`;
      }
      if (this.criteria.ingredients.length > 0) {
        queryString += `ingredients=${this.criteria.ingredients.join(',')}&`;
      }
      // remove the trailing '&'
      return queryString.slice(0, -1);
    }
  }
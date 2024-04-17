class RecipeInfo {
  constructor({ id, title, vegetarian, vegan, extendedIngredients, analyzedInstructions }) {
    this.id = id;
    this.title = title;
    this.vegetarian = vegetarian;
    this.vegan = vegan;
    this.ingredients = extendedIngredients.map(ingredient => ingredient.original);
    this.instructions = analyzedInstructions.map(instruction => {
      return {
        name: instruction.name,
        steps: instruction.steps.map(step => ({
          step: step.step,
          ingredients: step.ingredients.map(ingredient => ingredient.name),
          equipment: step.equipment.map(equipment => equipment.name)
        }))
      };
    });
  }
}
  
  export default RecipeInfo;
  
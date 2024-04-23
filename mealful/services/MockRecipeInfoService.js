export default class MockRecipeInfoService {
    async fetchRecipeInfo(id) {
      if (id === 1) {
        return {
          id: 1,
          title: 'Mock Recipe 1',
          vegetarian: true,
          vegan: false,
          extendedIngredients: [
            {
              id: 1,
              name: 'ingredient 1',
              amount: 2,
              unit: 'cups',
            },
            {
              id: 2,
              name: 'ingredient 2',
              amount: 1,
              unit: 'tablespoon',
            },
            // Add more ingredients as needed
          ],
          analyzedInstructions: [
            {
              step: 1,
              instruction: 'Step 1: Do something',
            },
            {
              step: 2,
              instruction: 'Step 2: Do something else',
            },
            // Add more instructions as needed
          ],
        };
      } else if (id === 2) {
        return {
          id: 2,
          title: 'Mock Recipe 2',
          vegetarian: false,
          vegan: true,
          extendedIngredients: [
            {
              id: 1,
              name: 'ingredient 1',
              amount: 2,
              unit: 'cups',
            },
            {
              id: 2,
              name: 'ingredient 2',
              amount: 1,
              unit: 'tablespoon',
            },
            // Add more ingredients as needed
          ],
          analyzedInstructions: [
            {
              step: 1,
              instruction: 'Step 1: Do something',
            },
            {
              step: 2,
              instruction: 'Step 2: Do something else',
            },
            // Add more instructions as needed
          ],
        };
      }
      // Add more mock recipes as needed
    }
  }
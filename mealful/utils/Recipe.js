import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Recipe {
  constructor(id, title, image) {
    this.id = id;
    this.title = title;
    this.image = image;
  }
}

export default Recipe;

/*
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    this.fetchRecipes();
  }

  fetchRecipes = () => {
    const API_KEY = 'YOUR_SPOONACULAR_API_KEY';
    const API_URL = `https:/api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`;

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const recipes = data.results.map((result) => {
          return new Recipe(
            result.title,
            result.extendedIngredients.map((ingredient) => ingredient.name),
            result.instructions
          );
        });
        this.setState({ recipes });
      })
      .catch((error) => console.error('Error fetching recipes:', error));
  };

  render() {
    return (
      <View>
        <Text>Recipes:</Text>
        {this.state.recipes.map((recipe, index) => (
          <View key={index}>
            <Text>Title: {recipe.title}</Text>
            <Text>Ingredients: {recipe.ingredients.join(', ')}</Text>
            <Text>Instructions: {recipe.instructions}</Text>
          </View>
        ))}
      </View>
    );
  }
}

export default App;
*/
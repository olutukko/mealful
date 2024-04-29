import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, Text, Image } from 'react-native';
import styles from '../styles/CategoryListStyles';
//import MockRecipesListService from '../services/MockRecipeListService';
//const recipesListService = new MockRecipesListService();

import RecipesListService from '../services/RecipesListService';
const recipesListService = new RecipesListService('d4fb1f02be7a4b39a3fd283067353232');


export default function CategoryList({ category, navigation }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipesListService.fetchRecipes(`complexSearch?sort=random&number=15&type=${category}`)
      .then((data) => {
        const recipes = Array.isArray(data) ? data : data.results;
        setRecipes(recipes);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
      });
  }, [category]);
    return (
    <ScrollView horizontal>
      {recipes.map((recipe, index) => {
        console.log('Rendering recipe:', recipe);  // Log each recipe data before rendering
        return (
          <TouchableOpacity key={index} onPress={() => navigation.navigate('Recipe', { id: recipe.id, image: recipe.image })} >
            <Text style={styles.title}>{recipe.title}</Text>
            <Image source={{ uri: recipe.image }} style={styles.image} />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
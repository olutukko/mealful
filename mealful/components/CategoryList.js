import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, Text, Image } from 'react-native';
import styles from '../styles/CategoryListStyles';
import MockRecipesListService from '../services/MockRecipeListService';

const recipesListService = new MockRecipesListService();
/*
import RecipesListService from '../services/RecipesListService';
const recipesListService = new RecipesListService('19e4e88681ca402c8348e0adac608509');
*/

export default function CategoryList({ category, navigation }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipesListService.fetchRecipes(`complexSearch?sort=random&number=15&type=${category}`)
      .then((recipes) => {
        console.log(`Fetched ${recipes.length} recipes for category ${category}:`, recipes);
        setRecipes(recipes);
      })
      .catch(console.error);
  }, [category]);

    return (
    <ScrollView horizontal>
      {recipes.map((recipe, index) => (
        <TouchableOpacity key={index} onPress={() => navigation.navigate('Recipe', { id: recipe.id, image: recipe.image })} >
          <Text style={styles.title}>{recipe.title}</Text>
          <Image source={{ uri: recipe.image }} style={styles.image} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
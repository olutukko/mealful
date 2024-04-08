import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles } from "../styles/global";
import RecipesService from '../services/recipesService';

export default function Home({navigation}) {
  const [recipes, setRecipes] = useState([]);
  const recipesService = new RecipesService('19e4e88681ca402c8348e0adac608509');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const fetchedRecipes = await recipesService.fetchRecipes('complexSearch');
        setRecipes(fetchedRecipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <View style={globalStyles.container}>
      {recipes.map((recipe, index) => (
        <View key={index}>
          <Text>{recipe.title}</Text>
          <Image source={{ uri: recipe.image }} style={{ width: 100, height: 100 }} />
        </View>
      ))}
    </View>
  )
}
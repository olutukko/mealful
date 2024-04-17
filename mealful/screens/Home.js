import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import RecipesListService from '../services/recipesListService';

export default function Home({navigation}) {
  const [recipes, setRecipes] = useState([]);
  const recipesService = new RecipesListService('19e4e88681ca402c8348e0adac608509');

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
    <ScrollView style={{flex: 1}}>
      <View style={globalStyles.container}>
        {recipes.map((recipe, index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate('Recipe', { id: recipe.id, image: recipe.image })}>
            <View>
              <Text>{recipe.title}</Text>
              <Image source={{ uri: recipe.image }} style={{ width: 100, height: 100 }} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}
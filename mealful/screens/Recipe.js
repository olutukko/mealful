import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { globalStyles } from "../styles/Global";
import RecipesInfoService from '../services/RecipesInfoService'; // Import RecipesInfoService

export default function Recipe({ route, navigation }) {
    const [recipe, setRecipe] = useState(null);
    const recipesService = new RecipesInfoService('19e4e88681ca402c8348e0adac608509'); // Use RecipesInfoService
    const { id, image } = route.params; // Get the id from the navigation parameters
  
    useEffect(() => {
        const fetchRecipe = async () => {
          try {
            const fetchedRecipe = await recipesService.fetchRecipeById(id);
            setRecipe(fetchedRecipe);
          } catch (error) {
            console.error('Error fetching recipe:', error);
          }
        };
    
        fetchRecipe();
      }, []);
    
  
    return (
        <ScrollView style={{flex: 1}}>
        {recipe && ( // Check if recipe is not null
            <View style={globalStyles.container}>
            <Text>{recipe.title}</Text>
            <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
            <Image source={{ uri: recipe.image }} style={{ width: 100, height: 100 }} />
            <Text>{recipe.vegan ? 'Vegan' : recipe.vegetarian ? 'Vegetarian' : ''}</Text>
            <Text>Ingredients:</Text>
            {recipe.ingredients.map((ingredient, index) => (
                <Text key={index}>{ingredient}</Text>
            ))}
            <Text>Instructions:</Text>
            {recipe.instructions.map((instruction, index) => (
                <View key={index}>
                <Text>{instruction.name}</Text>
                {instruction.steps.map((step, stepIndex) => (
                    <Text key={stepIndex}>{step.step}</Text>
                ))}
                </View>
            ))}
            </View>
        )}
        </ScrollView>
    )
}
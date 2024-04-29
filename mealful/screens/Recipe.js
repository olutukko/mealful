import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { globalStyles } from "../styles/Global";
import RecipesInfoService from '../services/RecipesInfoService'; // Import RecipesInfoService
//import MockRecipeInfoService from '../services/MockRecipeInfoService'; // Import MockRecipeInfoService

export default function Recipe({ route, navigation }) {
    const [recipe, setRecipe] = useState(null);
    const recipesService = new RecipesInfoService('d4fb1f02be7a4b39a3fd283067353232'); // Use RecipesInfoService
    //const recipesService = new MockRecipeInfoService(); // Use MockRecipeInfoService
    const { id, image } = route.params; // Get the id from the navigation parameters
  
    useEffect(() => {
        const fetchRecipe = async () => {
          try {
            // const fetchedRecipe = await recipesService.fetchRecipeById(id);
            const fetchedRecipe = await recipesService.fetchRecipeById(id, isVegan); // Use fetchRecipeInfo method of MockRecipeInfoService
            setRecipe(fetchedRecipe);
          } catch (error) {
            console.error('Error fetching recipe:', error);
          }
        };
    
        fetchRecipe();
      }, [isVegan]);
    
  
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
                <Text key={index}>{ingredient}</Text> // ingredient is a string, not an object
            ))}
            <Text>Instructions:</Text>
            {recipe.instructions.map((instructionGroup, index) => (
                <View key={index}>
                <Text>{instructionGroup.name}</Text>
                {instructionGroup.steps.map((step, stepIndex) => (
                    <Text key={stepIndex}>{step.step}</Text>
                ))}
                </View>
            ))}
            </View>
        )}
        </ScrollView>
    )
}
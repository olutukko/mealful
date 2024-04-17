import React from 'react';
import { ScrollView, Text } from 'react-native';
import CategoryList from '../components/CategoryList';
import styles from '../styles/HomeStyles';

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <Text style={styles.title}>Main Course</Text>
      <CategoryList style={styles.categoryList} category="main course" navigation={navigation} />
      <Text style={styles.title}>Side Dish</Text>
      <CategoryList style={styles.categoryList} category="side dish" navigation={navigation} />
      <Text style={styles.title}>Dessert</Text>
      <CategoryList style={styles.categoryList} category="dessert" navigation={navigation} />
      <Text style={styles.title}>Appetizer</Text>
      <CategoryList style={styles.categoryList} category="appetizer" navigation={navigation} />
      <Text style={styles.title}>Salad</Text>
      <CategoryList style={styles.categoryList} category="salad" navigation={navigation} />
    </ScrollView>
  );
}
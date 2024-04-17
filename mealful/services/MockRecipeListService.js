export default class MockRecipesListService {
    async fetchRecipes(criteria) {
        if (criteria.includes('main course')) {
            return [
                {
                    id: 1,
                    title: 'Dummy Main Course 1',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                {
                    id: 2,
                    title: 'Dummy Main Course 2',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                // Add more dummy recipes as needed
            ];
        } else if (criteria.includes('dessert')) {
            return [
                {
                    id: 3,
                    title: 'Dummy Dessert 1',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                {
                    id: 4,
                    title: 'Dummy Dessert 2',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                {
                    id: 11,
                    title: 'Dummy Dessert 3',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                {
                    id: 12,
                    title: 'Dummy Dessert 4',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                {
                    id: 13,
                    title: 'Dummy Dessert 5',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                {
                    id: 14,
                    title: 'Dummy Dessert 6',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                {
                    id: 15,
                    title: 'Dummy Dessert 7',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                {
                    id: 16,
                    title: 'Dummy Dessert 8',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                {
                    id: 17,
                    title: 'Dummy Dessert 9',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                {
                    id: 18,
                    title: 'Dummy Dessert 10',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                // Add more dummy recipes as needed
            ];
        } else if (criteria.includes('side dish')) {
            return [
                {
                    id: 5,
                    title: 'Dummy Side Dish 1',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                {
                    id: 6,
                    title: 'Dummy Side Dish 2',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                {
                    id: 19,
                    title: 'Dummy Side Dish 3',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                {
                    id: 20,
                    title: 'Dummy Side Dish 4',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                {
                    id: 21,
                    title: 'Dummy Side Dish 5',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                {
                    id: 22,
                    title: 'Dummy Side Dish 6',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                {
                    id: 23,
                    title: 'Dummy Side Dish 7',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                {
                    id: 24,
                    title: 'Dummy Side Dish 8',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                {
                    id: 25,
                    title: 'Dummy Side Dish 9',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                {
                    id: 26,
                    title: 'Dummy Side Dish 10',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                // Add more dummy recipes as needed
            ];
        } else if (criteria.includes('appetizer')) {
            return [
                {
                    id: 7,
                    title: 'Dummy Appetizer 1',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                {
                    id: 8,
                    title: 'Dummy Appetizer 2',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                // Add more dummy recipes as needed
            ];
        } else if (criteria.includes('salad')) {
            return [
                {
                    id: 9,
                    title: 'Dummy Salad 1',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                {
                    id: 10,
                    title: 'Dummy Salad 2',
                    image: 'https://www.nortembio.nortem.info/wp-content/uploads/2019/07/shutterstock_528695131-e1570611490747.jpg'
                },
                // Add more dummy recipes as needed
            ];
        }

        // Add more conditions for other categories as needed

        return [];
    }
}

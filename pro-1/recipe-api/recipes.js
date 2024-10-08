let recipes = [];
let currentId = 1;

const getAllRecipes = () => recipes;
const getRecipeById = (id) => recipes.find(recipe => recipe.id === id);
const createRecipe = (recipe) => {
    const newRecipe = { id: currentId++, ...recipe };
    recipes.push(newRecipe);
    return newRecipe;
};
const updateRecipe = (id, updatedRecipe) => {
    const index = recipes.findIndex(recipe => recipe.id === id);
    if (index !== -1) {
        recipes[index] = { id, ...updatedRecipe };
        return recipes[index];
    }
    return null;
};
const deleteRecipe = (id) => {
    const index = recipes.findIndex(recipe => recipe.id === id);
    if (index !== -1) {
        return recipes.splice(index, 1)[0];
    }
    return null;
};

module.exports = { getAllRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe };

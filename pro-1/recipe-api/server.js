const express = require('express');
const bodyParser = require('body-parser');
const { getAllRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe } = require('./recipes');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.get('/recipes', (req, res) => {
    res.json(getAllRecipes());
});
app.get('/recipes/:id', (req, res) => {
    const recipe = getRecipeById(parseInt(req.params.id));
    if (recipe) {
        res.json(recipe);
    } else {
        res.status(404).send('Recipe not found');
    }
});
app.post('/recipes', (req, res) => {
    const newRecipe = createRecipe(req.body);
    res.status(201).json(newRecipe);
});
app.put('/recipes/:id', (req, res) => {
    const updatedRecipe = updateRecipe(parseInt(req.params.id), req.body);
    if (updatedRecipe) {
        res.json(updatedRecipe);
    } else {
        res.status(404).send('Recipe not found');
    }
});
app.delete('/recipes/:id', (req, res) => {
    const deletedRecipe = deleteRecipe(parseInt(req.params.id));
    if (deletedRecipe) {
        res.json(deletedRecipe);
    } else {
        res.status(404).send('Recipe not found');
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

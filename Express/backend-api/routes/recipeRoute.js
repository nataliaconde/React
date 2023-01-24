import express from "express";
import { readFile, writeFile } from "fs/promises";

const data = JSON.parse(await readFile("./data/data.json"));

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Welcome to the API...");

});

router
  .route("/recipes")
  .get((req, res) => {
    try {
      res.send(data);
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: "Something went wrong" });
    }
  })
  .put(async (req, res) => {
    try {
      const test = (obj) => obj.name === req.body.name;
      if (data.recipes.some(test) === false) {
        res.status(400).send({ error: "Recipe does not exist" });
      } else {
        const index = data.recipes.findIndex(
          (recipes) => recipes.name === req.body.name
        );
        if (index !== -1) {
          data.recipes.splice(index, 1);
        }
        data.recipes.push(req.body);
        await writeFile("./data/data.json", JSON.stringify(data, null, 2));
        res.status(204).send({ Status: "204" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: "Recipe was not updated" });
    }
  })
  .post(async (req, res) => {
    try {
      const newItem = req.body;
      const test = (obj) => obj.name === req.body.name;
      if (data.recipes.some(test) === true) {
        res.status(400).send({ error: "Recipe already exists" });
      } else {
        await data.recipes.push(newItem);
        const newRecipes = JSON.stringify(data, null, 2);
        await writeFile("./data/data.json", newRecipes);
        res.status(200).send(JSON.parse(newRecipes));
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: "Something went wrong" });
    }
  });

router.route("/recipeNames").get((req, res) => {
  try {
    const arr = [];
    for (let i = 0; i < data.recipes.length; i++) {
      let recipe = data.recipes[i];
      let recipeName = recipe.name;
      arr.push(recipeName);
    }
    res.status(200).send({ recipeNames: arr });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Something went wrong" });
  }
});

router.route("/recipes/details/:name").get((req, res) => {
  try {
    const recipeName = req.params.name;
    const recipe = data.recipes.find((recipes) => recipes.name === recipeName);
    if (!recipe) {
      res.status(200).send({});
    } else {
      const arr = [];
      let recipeDetails = recipe.ingredients;
      arr.push(recipeDetails);
      let numSteps = 0;
      for (const obj of recipeDetails) {
        if (obj) numSteps++;
      }
      res.status(200).send({ details: arr, numSteps });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Something went wrong" });
  }
});

export default router;

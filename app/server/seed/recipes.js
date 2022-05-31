const db = require("../db/index");
const RecipeModel = require("../models/recipe");

db.on("error", console.error.bind(console, "MongoDB Connection Error"));

const main = async () => {
  const initialRecipes = [
    {
      recipeName: "Bacon, Egg, and Avocado Burgers",
      ingredients:
        "3 tablespoons salted butter, softened. 4 hamburger buns, split. 8 slices thick-cut bacon. 1 ½ pounds lean ground beef",
      recipeImage:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8131746.jpg&w=595&h=398&c=sc&poi=face&q=60",
    },
  ];
  await RecipeModel.insertMany(initialRecipes);
  console.log("Submitted Recipes");
};

const run = async () => {
  await main();
  db.close;
};
run();

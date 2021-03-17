/** 

The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipe. 

It should have properties for 

- Title (a string), 
- Servings (a number), and 
- Ingredients (an array of strings)

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa

You should write and log at least 5 recipes

**/

let recipes = [
    {
        Title: "Cheese Sandwich",
        Serves: 2,
        Ingredients: [
            "Bread",
            "Cheese",
            "Tomoto"
        ]
    },
    {
        Title: "Curry",
        Serves: 4,
        Ingredients: [
            "Spice",
            "Potatoes",
            "Meat",
            "Veg"
        ]
    },
    {
        Title: "Rice",
        Serves: 4,
        Ingredients: [
            "Rice",
            "Water",
            "Salt"
        ]
    },
    {
        Title: "Steak",
        Serves: 1,
        Ingredients: [
            "Steak",
            "Salt",
            "Black pepper"
        ]
    },
    {
        Title: "French Toast",
        Serves: 6,
        Ingredients: [
             "Bread",
             "Eggs",
             "Salt",
             "White Pepper",
             "Smoke Paprika"
         ]
    }
];

for (recipe of recipes) {
    console.log(recipe.Title);
    console.log(`Serves: ${recipe.Serves}`);
    console.log(`Ingredients: ${recipe.Ingredients}`);
}

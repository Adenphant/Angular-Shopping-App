import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel',
      'https://www.allrecipes.com/thmb/mmP7TwfbUf4LjFtEjNpPBNaC928=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/78117-wienerschnitzel-ddmfs-3X4-0200-ec06b882b575486ab7398957709413d2.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Big Burger Mmm',
      'Tasty mm burger mm',
      'https://madensverden.dk/wp-content/uploads/2021/02/verdens-bedste-burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Beef', 1),
        new Ingredient('Bacon', 2)
      ])
];

  getRecipes(){
    return this.recipes.slice();
  }
}

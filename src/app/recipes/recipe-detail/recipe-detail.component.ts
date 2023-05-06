import { Component, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.html']
})

export class RecipeDetailComponent {
  @Input() recipe: Recipe

  constructor(private recipeService: RecipeService){}

  onAddToShoppingList(){
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }
}

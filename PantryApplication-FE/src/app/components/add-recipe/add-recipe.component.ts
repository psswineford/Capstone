import { Component } from '@angular/core';
import { Recipe } from 'src/app/Data/Recipe';
import { PantryService } from 'src/app/services/pantry.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {

  name: string = ''
  instructions: string = ''
  ingredients: string = ''

  // newRecipe = {
  //   name: '',
  //   instructions: '',
  //   ingredients: 
  //     {
  //       ingredientName: ''
  //     },
    
  // }
  
 


  userId: number = 0
  constructor(public uiservice: UiService, public pantryService: PantryService, public recipeService: RecipeService){}

  addRecipe(name: string, instructions: string, ingredients: string): void {
    var newRecipe = {
      name: name,
      instructions: instructions,
       ingredientName: ingredients
        
      
    }
    this.recipeService.createRecipeItem(newRecipe)
  }
}

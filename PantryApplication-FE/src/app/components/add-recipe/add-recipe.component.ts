import { Component } from '@angular/core';
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
  ingredients2: string = ''
  ingredients3: string = ''
  ingredients4: string = ''
  ingredients5: string = ''

  userId: number = 0
  constructor(public uiservice: UiService, public pantryService: PantryService, public recipeService: RecipeService){}
}
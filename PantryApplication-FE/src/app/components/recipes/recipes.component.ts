import { Component, OnInit } from '@angular/core';
import { RecipeItems } from 'src/app/Data/RecipeItems';
import { PantryService } from 'src/app/services/pantry.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit{
  searchName: string = ''
  searchString: string = ''

  constructor(public uiservice: UiService, public pantryService: PantryService, public recipeService: RecipeService){
    recipeService.getRecipes(uiservice.userId)
  }


  
  searchReddit(name: string): string {
    this.searchName = name;
    this.searchString = `https://www.reddit.com/search/?q=${name}%20recipe`
    return this.searchString
  }

  cookRecipe(
    ingredients: string,
    ingredients2: string,
    ingredients3: string,
    ingredients4: string,
    ingredients5: string,
    ) : void {
      this.pantryService.updatePantryByName(ingredients);
      this.pantryService.updatePantryByName(ingredients2);
      this.pantryService.updatePantryByName(ingredients3);
      this.pantryService.updatePantryByName(ingredients4);
      this.pantryService.updatePantryByName(ingredients5);
    }


  ngOnInit(): void {
    
  }

}



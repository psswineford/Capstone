import { Component, OnInit } from '@angular/core';
import { RecipeItems } from 'src/app/Data/RecipeItems';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit{
  searchName: string = ''
  searchString: string = ''

  constructor(public uiservice: UiService){}


  
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
      this.uiservice.updatePantryByName(ingredients);
      this.uiservice.updatePantryByName(ingredients2);
      this.uiservice.updatePantryByName(ingredients3);
      this.uiservice.updatePantryByName(ingredients4);
      this.uiservice.updatePantryByName(ingredients5);
    }


  ngOnInit(): void {
    
  }

}



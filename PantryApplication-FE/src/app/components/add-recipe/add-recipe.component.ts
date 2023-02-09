import { Component } from '@angular/core';
import { Recipe } from 'src/app/Data/Recipe';
import { PantryService } from 'src/app/services/pantry.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { UiService } from 'src/app/services/ui.service';
import {  FormArray, Validators, FormControl } from '@angular/forms';

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

  showIngredients: boolean = true
  showIngredients2: boolean = false
  showIngredients3: boolean = false
  showIngredients4: boolean = false
  showIngredients5: boolean = false


  constructor(public uiservice: UiService, public pantryService: PantryService, public recipeService: RecipeService) { }

  setShowIngredients2(): void {
    console.log('this ran')
    this.showIngredients = true
    this.showIngredients2 = true
    this.showIngredients3 = false
    this.showIngredients4 = false
    this.showIngredients5 = false
  }
  setShowIngredients3(): void {
    this.showIngredients = true
    this.showIngredients2 = true
    this.showIngredients3 = true
    this.showIngredients4 = false
    this.showIngredients5 = false
  }
  setShowIngredients4(): void {
    this.showIngredients = true
    this.showIngredients2 = true
    this.showIngredients3 = true
    this.showIngredients4 = true
    this.showIngredients5 = false
  }
  setShowIngredients5(): void {
    this.showIngredients = true
    this.showIngredients2 = true
    this.showIngredients3 = true
    this.showIngredients4 = true
    this.showIngredients5 = true
  }

  returnShowIngredients2(): boolean {
    return this.showIngredients2
  }

  returnShowIngredients3(): boolean {
    return this.showIngredients3
  }
  returnShowIngredients4(): boolean {
    return this.showIngredients4
  }
  returnShowIngredients5(): boolean {
    return this.showIngredients5
  }

}

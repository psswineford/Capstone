import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Recipe } from '../Data/Recipe';
import { RecipeItems } from '../Data/RecipeItems';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient, public service: UiService) { }

  private recipe: Recipe[] = []
  private recipeItems: RecipeItems[] =  []

  //private BASEURL: string = 'https://localhost:7214/api/'

  public returnRecipe(): Recipe [] {
    return this.recipe
  }

  public returnRecipeItems(): RecipeItems [] {  
    return this.recipeItems
  }

  public getRecipes(id: number) {
    this.http.get<Recipe[]>( `api/Recipe/id?id=${id}`)
      .pipe(take(1))
      .subscribe({
        next: data => {
          this.recipe = data
        },
        error: err => {
          this.service.showError(err + 'unable to get recipes')
        }
      })
  }
  
  
  public createRecipeItem(recipe: any) {
    this.http.post( `api/Recipe`, {
      name: recipe.name,
      instructions: recipe.instructions,
      ingredients: [
        {
          ingredientName: recipe.ingredientName
        }
      ],
      userId: this.service.userId
    })
      .pipe(take(1))
      .subscribe({
        next: c => {
          this.getRecipes(this.service.userId)
          this.service.setRecipesPage()
        },
        error: err => {
          this.service.showError(err + 'Unable to create recipe')
        }
      })
  }
  
  public deleteRecipeItem(id: number) {
    this.http.delete<Recipe[]>(`api/Recipe/id?id=${id}`)
    .pipe(take(1))
    .subscribe({
      next: data => {
        this.recipe = data
        this.getRecipes(this.service.userId)
      },
      error: err => {
        this.service.showError(err + 'unable to delete')
      }
    })
  }
  //not currently working - leaving in to debug later
  public getRecipeItems(id: number): void {
    this.http.get<RecipeItems[]>( `api/Recipe/test?id=${id}`)
    .pipe(take(1))
    .subscribe({
      next: data => {
        this.recipeItems = data
      },
      error: err => {
       this.service.showError(err + 'unable to get recipe items')
      }
    })
  }
}

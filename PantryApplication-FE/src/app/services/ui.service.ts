import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Data } from '@angular/router';
import { take } from 'rxjs';
import { Pantry } from '../Data/Pantry';
import { Recipe } from '../Data/Recipe';
import { RecipeItems } from '../Data/RecipeItems';
import { User } from '../Data/User';



@Injectable({
  providedIn: 'root'
})
export class UiService {

 

  private pantry: Pantry[] = []
  private recipe: Recipe[] = []
  private recipeItems: RecipeItems[] = []
  private showLoginPage: boolean = true
  private showPantryPage: boolean = false
  private showRecipesPage: boolean = false
  private showFriendsPage: boolean = false
  private showAddPantryItemPage: boolean = false
  private showAddUserPage: boolean = false
  private showAddRecipePage: boolean = false
  private firstName: string = 'Please Login'
  private userId: number = 0
  private BASEURL: string = 'https://localhost:7214/api/'

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { 
    const username = localStorage.getItem('username')
    const password = localStorage.getItem('password')
    if (username != null && password != null) {
      this.tryLogin(username, password)
    }

  }

  //return state info 
  public getShowLogin(): boolean {
    return this.showLoginPage
  }

  public getShowPantry(): boolean {
    return this.showPantryPage
  }

  public getFirstName(): string {
    return this.firstName
  }

  public getRecipesPage(): boolean {
    return this.showRecipesPage
  }

  public getFriendsPage(): boolean {
    return this.showFriendsPage
  }

  public getShowAddPantryItemPage(): boolean {
    return this.showAddPantryItemPage
  }

  public getShowAddUserPage(): boolean {
    return this.showAddUserPage
  }

  public getShowAddRecipePage(): boolean {
    return this.showAddRecipePage
  }

  public returnPantry(): Pantry[] {
    return this.pantry
  }

  public returnRecipe(): Recipe [] {
    return this.recipe
  }

  // public returnRecipeItems(id: number): RecipeItems [] {  
  //   this.getRecipeItems(id)
  //   return this.recipeItems
  // }

  public setLoginPage(): void {
    this.showLoginPage = true
    this.showPantryPage = false
    this.showFriendsPage = false
    this.showRecipesPage = false
    this.showAddPantryItemPage = false
    this.showAddUserPage = false
    this.showAddRecipePage = false
  }

  public  setPantryPage(): void {
    this.showLoginPage = false
    this.showPantryPage = true
    this.showFriendsPage = false
    this.showRecipesPage = false
    this.showAddPantryItemPage = false
    this.showAddUserPage = false
    this.showAddRecipePage = false
    this.getPantry(this.userId)
    
  }

  public  setRecipesPage(): void {
    this.showLoginPage = false
    this.showPantryPage = false
    this.showFriendsPage = false
    this.showRecipesPage = true
    this.showAddPantryItemPage = false
    this.showAddUserPage = false
    this.showAddRecipePage = false
  }

  public  setFriendsPage(): void {
    this.showLoginPage = false
    this.showPantryPage = false
    this.showFriendsPage = true
    this.showRecipesPage = false
    this.showAddPantryItemPage = false
    this.showAddUserPage = false
    this.showAddRecipePage = false
  }

  public setAddPantryItemPage(): void {
    this.showLoginPage = false
    this.showPantryPage = false
    this.showFriendsPage = false
    this.showRecipesPage = false
    this.showAddPantryItemPage = true
    this.showAddUserPage = false
    this.showAddRecipePage = false
  }

  public setAddUserPage(): void {
    this.showLoginPage = false
    this.showPantryPage = false
    this.showFriendsPage = false
    this.showRecipesPage = false
    this.showAddPantryItemPage = false
    this.showAddUserPage = true
    this.showAddRecipePage = false
  }

  public setAddRecipePage(): void {
    this.showLoginPage = false
    this.showPantryPage = false
    this.showFriendsPage = false
    this.showRecipesPage = false
    this.showAddPantryItemPage = false
    this.showAddUserPage = false
    this.showAddRecipePage = true
  }



  private showError(message: string): void {
    this.snackBar.open(message, undefined, {
      duration: 2000
    })
  }



  //User methods
  public tryLogin(username: string, password: string) {
    this.http.get<User>(this.BASEURL + `User/login?email=${username}&password=${password}`)
      .pipe(take(1))
      .subscribe({
        next: user => {
          //this.getPantryItems(data.id)
          
          this.loginSuccess(user)
        },
        error: err => {
          this.showError('Oops, something went wrong on the server side')
        }
      })
  }

  private loginSuccess(user: User): void {
    this.showLoginPage = false
    this.showPantryPage = true
    this.showFriendsPage = false
    this.showRecipesPage = false
    this.showAddPantryItemPage = false
    this.firstName = user.firstName
    this.userId = user.id
    localStorage.setItem('username', user.email)
    localStorage.setItem('password', user.password)
    this.getPantry(user.id)
    this.getRecipes(user.id)
  }

  public logout(): void {
    // clear local storage items
    this.showLoginPage = true
    this.showPantryPage = false
    this.showFriendsPage = false
    this.showRecipesPage = false
    this.showAddPantryItemPage = false
    localStorage.clear()
    this.userId = 0
    this.firstName = "Please Login"
  }

  public registerUser(email: string, password: string, firstName: string, lastName: string): void {
    this.http.post<User>(this.BASEURL + `User`, {
      email,
      password, 
      firstName,
      lastName
    }).pipe(take(1))
      .subscribe({
        next: user => {
          this.showError('Succesfully Added, Please Login')
          this.setLoginPage()
        },
        error: err => {
          this.showError('Oops something went wrong')
        }
      })
  }



//pantry item methods
  public getPantry(id: number) {
    this.http.get<Pantry[]>(this.BASEURL + `Pantry/id?id=${id}`)
      .pipe(take(1))
      .subscribe({
        next: data => {
          this.pantry = data
          this.returnPantry()
        },
        error: err => {
          this.showError('Opps, something went wrong')
        }
      })
  }

  
  public createPantryItem(name: string, weight: number, calories: number, quantity: number) {
    this.http.post(this.BASEURL + `Pantry`, {
      name,
      weight,
      calories,
      quantity,
      userId: this.userId
    })
      .pipe(take(1))
      .subscribe({
        next: c => {
          this.setPantryPage()
        },
        error: err => {
          this.showError('Opps, something went wrong')
        }
      })
  }

  public updatePantryItem(id: number, name: string, weight: number, calories: number, quantity: number, userId: number){
    this.http.put(this.BASEURL + `Pantry`, {
      id,
      name,
      weight,
      calories,
      quantity,
      userId
    })
    .pipe(take(1))
    .subscribe({
      next: c => {
        this.setPantryPage()
      },
      error: err => {
        this.showError('Opps, something went wrong')
      }
      
    })
  }

  public deletePantryItem(id: number) {
    this.http.delete<Pantry[]>(this.BASEURL + `Pantry/id?id=${id}`)
    .pipe(take(1))
    .subscribe({
      next: data => {
        this.pantry = data
        this.getPantry(this.userId)
      },
      error: err => {
        this.showError('Opps, something went wrong')
      }
    })
  }

//Recipe Methods

public getRecipes(id: number) {
  this.http.get<Recipe[]>(this.BASEURL + `Recipe/id?id=${id}`)
    .pipe(take(1))
    .subscribe({
      next: data => {
        this.recipe = data
      },
      error: err => {
        this.showError('Opps, something went wrong')
      }
    })
}


public createRecipeItem(name: string, instructions: string, ingredients: string) {
  this.http.post(this.BASEURL + `Recipe`, {
    name,
    instructions,
    ingredients,
    userId: this.userId
  })
    .pipe(take(1))
    .subscribe({
      next: c => {
        this.setRecipesPage()
      },
      error: err => {
        this.showError('Opps, something went wrong')
      }
    })
}

public deleteRecipeItem(id: number) {
  this.http.delete<Recipe[]>(this.BASEURL + `Recipe/id?id=${id}`)
  .pipe(take(1))
  .subscribe({
    next: data => {
      this.recipe = data
      this.getRecipes(this.userId)
    },
    error: err => {
      this.showError('Opps, something went wrong')
    }
  })
}

public getRecipeItems(id: number): RecipeItems[] {
  this.http.get<RecipeItems[]>(this.BASEURL + `Recipe/test?id=${id}`)
  .pipe(take(1))
  .subscribe({
    next: data => {
      this.recipeItems = data
    },
    error: err => {
     this.showError('Opps, something went wrong')
    }
  })

  return this.recipeItems
}






}

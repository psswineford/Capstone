import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Data } from '@angular/router';
import { BehaviorSubject, take } from 'rxjs';
import { Friends } from '../Data/Friend';
import { FriendInviteInfo } from '../Data/FriendInviteInfo';
import { Pantry } from '../Data/Pantry';
import { Recipe } from '../Data/Recipe';
import { RecipeItems } from '../Data/RecipeItems';
import { User } from '../Data/User';
import { UserName } from '../Data/UserName';



@Injectable({
  providedIn: 'root'
})
export class UiService {

 

  private pantry: Pantry[] = []
  private recipe: Recipe[] = []
  private friendRecipes: Recipe[] = []
  private recipeItems: RecipeItems[] =  []
  private friendsList: Friends[] = []
  private userNames: UserName[] = []
  private friendName: FriendInviteInfo[] = []
  $recipeItems = new BehaviorSubject<RecipeItems[]>([])
  private showLoginPage: boolean = true
  private showPantryPage: boolean = false
  private showRecipesPage: boolean = false
  private showFriendsPage: boolean = false
  private showAddPantryItemPage: boolean = false
  private showAddUserPage: boolean = false
  private showAddRecipePage: boolean = false
  private showFriendsRecipes: boolean = false
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

  public getShowFriendsRecipes(): boolean {
    return this.showFriendsRecipes
  }

  public returnPantry(): Pantry[] {
    return this.pantry
  }

  public returnFriendsList(): Friends[] {
    return this.friendsList
  }

  public returnRecipe(): Recipe [] {
    return this.recipe
  }

  public returnFriendRecipes(): Recipe[] {
    return this.friendRecipes
  }

  public returnRecipeItems(): RecipeItems [] {  
    return this.recipeItems
  }

  public returnUserNames(): UserName [] {
    return this.userNames
  }

  public returnFriendInviteInfo(): FriendInviteInfo[] {
    return this.friendName
  }

  public returnUserId() : number {
    return this.userId
  }

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
    this.getRecipes(this.userId)
  }

  public  setFriendsPage(): void {
    this.showLoginPage = false
    this.showPantryPage = false
    this.showFriendsPage = true
    this.showRecipesPage = false
    this.showAddPantryItemPage = false
    this.showAddUserPage = false
    this.showAddRecipePage = false
    this.getFriends(this.userId)
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

  public getAllUserNames(): void {
    this.http.get<UserName[]>(this.BASEURL + `User/usernames`)
    .pipe(take(1))
    .subscribe({
      next: user => {
        this.userNames = user
      },
      error: err => {
        this.showError('Oops something went wrong')
      }
    });
  }

  //Add Friend Methods

  public sendFriendInvite(fromFriend: string): void {
    this.http.post(this.BASEURL + `FriendInvite`, {
      fromFriendName: this.firstName,
      toFriendName: fromFriend
    }) 
    .pipe(take(1))
    .subscribe({
      next: c => {
        console.log("add successfully")
      },
      error: err => {
        this.showError('Opps, something went wrong')
      }
    })
  }

  public getFriendInvite(id: number): void{
    this.http.get<FriendInviteInfo[]>(this.BASEURL + `FriendInvite?id=${id}`)
    .pipe(take(1))
    .subscribe({
      next: data => {
      this.friendName = data
      },
      error: err => {
        this.showError('Oops')
      }
    })
  }

  public AcceptInvite(toFriendName: string): void {
    this.http.post(this.BASEURL + `Friend`, {
      toFriendName,
      fromFriendName: this.firstName
    })
    .pipe(take(1))
    .subscribe({
      next: c => {
        console.log("add successfully")
        this.RemoveInvite(this.userId)
      },
      error: err => {
        this.showError('Opps, something went wrong')
      }
    })
  }

  public RemoveInvite(userId: number): void {
    console.log("remove this id" + userId)
    this.http.delete(this.BASEURL + `FriendInvite?userId=${userId}`)
    .pipe(take(1))
    .subscribe({
      next: c => {
        console.log("ID removed")
        this.getFriendInvite(userId)
      },
      error: err => {
        this.showError('oops, didnt go through')
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
//This won't work because it always just gets the last bit of data try returning directly here
public getRecipeItems(id: number): void {
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
}

//get Friend Info
public getFriends(id: number) {
  this.http.get<Friends[]>(this.BASEURL + `Friend?id=${id}`)
    .pipe(take(1))
    .subscribe({
      next: data => {
        this.friendsList = data
      },
      error: err => {
        this.showError('Opps, something went wrong')
      }
    })
}

public loadFriendRecipes(id: number) {
  this.http.get<Recipe[]>(this.BASEURL + `Recipe/id?id=${id}`)
    .pipe(take(1))
    .subscribe({
      next: data => {
        this.friendRecipes = data
        this.showFriendsRecipes = true
        
      },
      error: err => {
        this.showError('Opps, something went wrong')
      }
    })

   
}

}


import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { User } from '../Data/User';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showLoginPage: boolean = true
  private showPantryPage: boolean = false
  private showRecipesPage: boolean = false
  private showFriendsPage: boolean = false
  private showAddPantryItemPage: boolean = false
  private showAddUserPage: boolean = false
  private showAddRecipePage: boolean = false
  public showFriendsRecipes: boolean = false
  public firstName: string = 'Please Login'
  public userId: number = 0

  constructor(private snackBar: MatSnackBar) { 
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


  public returnUserId() : number {
    return this.userId
  }
//setting state info
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
    //this.getFriends(this.userId)
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

  public loginSuccess(user: User): void {
    this.showLoginPage = false
    this.showPantryPage = true
    this.showFriendsPage = false
    this.showRecipesPage = false
    this.showAddPantryItemPage = false
    this.firstName = user.firstName
    this.userId = user.id
    localStorage.setItem('username', user.email)
    localStorage.setItem('password', user.password)

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

  public showError(message: string): void {
    this.snackBar.open(message, undefined, {
      duration: 2000
    })
  }


}

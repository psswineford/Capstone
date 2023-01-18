import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { take } from 'rxjs';
import { Pantry } from '../Data/Pantry';
import { User } from '../Data/User';

@Injectable({
  providedIn: 'root'
})
export class UiService {

 

  private pantry: Pantry[] = []
  private showLoginPage: boolean = true
  private showPantryPage: boolean = false
  private showRecipesPage: boolean = false
  private showFriendsPage: boolean = false
  private firstName: string = 'Please Login'
  private BASEURL: string = 'https://localhost:7214/api/'

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

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

  public returnPantry(): Pantry[] {
    return this.pantry
  }

  public  setPantryPage(): void {
    this.showLoginPage = false
    this.showPantryPage = true
    this.showFriendsPage = false
    this.showRecipesPage = false
    this.getPantry()
  }

  public  setRecipesPage(): void {
    this.showLoginPage = false
    this.showPantryPage = false
    this.showFriendsPage = false
    this.showRecipesPage = true
  }

  public  setFriendsPage(): void {
    this.showLoginPage = false
    this.showPantryPage = false
    this.showFriendsPage = true
    this.showRecipesPage = false
  }

  private showError(message: string): void {
    this.snackBar.open(message, undefined, {
      duration: 2000
    })
  }



  //login methods
  public tryLogin(username: string, password: string) {
    this.http.get<User>(this.BASEURL + `User/login?email=${username}&password=${password}`)
      .pipe(take(1))
      .subscribe({
        next: data => {
          this.firstName = data.firstName
          //this.getPantryItems(data.id)
          this.loginSuccess()
        },
        error: err => {
          this.showError('Oops, something went wrong on the server side')
        }
      })
  }

  private loginSuccess(): void {
    this.showLoginPage = false
    this.showPantryPage = true
    this.showFriendsPage = false
    this.showRecipesPage = false
    this.getPantry()
  }

  public logout(): void {
    // clear local storage items
    this.showLoginPage = true
    this.showPantryPage = false
    this.showFriendsPage = false
    this.showRecipesPage = false
    this.firstName = "Please Login"
  }

//patry item methods
  public getPantry() {
    this.http.get<Pantry[]>(this.BASEURL + `Pantry`)
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






}


import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, take } from 'rxjs';
import { User } from '../Data/User';
import { UserName } from '../Data/UserName';
import { Injectable } from '@angular/core';
import { UiService } from './ui.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userNames: UserName[] = []
  private BASEURL: string = 'https://localhost:7214/api/'

  constructor(private http: HttpClient, public service: UiService) { 
    const username = localStorage.getItem('username')
    const password = localStorage.getItem('password')
    if (username != null && password != null) {
      this.tryLogin(username, password)
    }

  }

  public returnUserNames(): UserName [] {
    return this.userNames
  }


  public tryLogin(username: string, password: string) {
    this.http.get<User>(this.BASEURL + `User/login?email=${username}&password=${password}`)
      .pipe(take(1))
      .subscribe({
        next: user => {
          this.service.loginSuccess(user)
        },
        error: err => {
          this.service.showError('Oops, something went wrong on the server side')
        }
      })
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
          this.service.showError('Succesfully Added, Please Login')
          this.service.setLoginPage()
        },
        error: err => {
          this.service.showError(err + 'Unable to register user')
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
        this.service.showError(err +'Unable to retrieve user names')
      }
    });
  }
}

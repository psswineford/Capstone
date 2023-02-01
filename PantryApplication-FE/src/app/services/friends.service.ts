import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Friends } from '../Data/Friend';
import { FriendInviteInfo } from '../Data/FriendInviteInfo';
import { Recipe } from '../Data/Recipe';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  private friendRecipes: Recipe[] = []
  private friendsList: Friends[] = []
  private friendName: FriendInviteInfo[] = []
  //private BASEURL: string = 'https://localhost:7214/api/'

  constructor(private http: HttpClient, public service: UiService) { }

  public returnFriendsList(): Friends[] {
    return this.friendsList
  }

  public returnFriendRecipes(): Recipe[] {
    return this.friendRecipes
  }

  public returnFriendInviteInfo(): FriendInviteInfo[] {
    return this.friendName
  }


  public sendFriendInvite(fromFriend: string): void {
    this.http.post( `api/FriendInvite`, {
      fromFriendName: this.service.firstName,
      toFriendName: fromFriend
    }) 
    .pipe(take(1))
    .subscribe({
      next: c => {
        console.log("add successfully")
      },
      error: err => {
        this.service.showError(err +'Unable to send friend invite')
      }
    })
  }

  public getFriendInvite(id: number): void{
    this.http.get<FriendInviteInfo[]>( `api/FriendInvite?id=${id}`)
    .pipe(take(1))
    .subscribe({
      next: data => {
      this.friendName = data
      },
      error: err => {
        this.service.showError(err + "unable to see friend invites")
      }
    })
  }

  public AcceptInvite(toFriendName: string): void {
    this.http.post( `api/Friend`, {
      toFriendName,
      fromFriendName: this.service.firstName
    })
    .pipe(take(1))
    .subscribe({
      next: c => {
        console.log("add successfully")
        this.RemoveInvite(this.service.userId)
      },
      error: err => {
        this.service.showError(err + 'unable to accept the invite')
      }
    })
  }

  public RemoveInvite(userId: number): void {
    console.log("remove this id" + userId)
    this.http.delete( `api/FriendInvite?userId=${userId}`)
    .pipe(take(1))
    .subscribe({
      next: c => {
        console.log("ID removed")
        this.getFriendInvite(userId)
      },
      error: err => {
        this.service.showError(err +'unable to remove invite')
      }
    })
  }

public getFriends(id: number) {
  this.http.get<Friends[]>( `api/Friend?id=${id}`)
    .pipe(take(1))
    .subscribe({
      next: data => {
        this.friendsList = data
      },
      error: err => {
        this.service.showError(err + 'unable to see friends')
      }
    })
}

public loadFriendRecipes(id: number) {
  this.http.get<Recipe[]>( `api/Recipe/id?id=${id}`)
    .pipe(take(1))
    .subscribe({
      next: data => {
        this.friendRecipes = data
        this.service.showFriendsRecipes = true
        
      },
      error: err => {
        this.service.showError(err + 'unable to see recipes')
      }
    })

   
}
  
}

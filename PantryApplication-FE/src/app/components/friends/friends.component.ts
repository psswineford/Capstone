import { Component } from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service';
import { UiService } from 'src/app/services/ui.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {
  userSelect: string = ''
  addFriendSection: boolean = false
  acceptInviteSection: boolean = false
  showFriendsSection: boolean = true
  userId: number = 0

  constructor(public uiservice: UiService, public userService: UserService, public friendService: FriendsService){
   userService.getAllUserNames()
   this.userId = uiservice.returnUserId()
   friendService.getFriendInvite(this.userId)
   friendService.getFriends(this.userId)
  }

  checkFriendInvite(): void {
    let invite = this.friendService.getFriendInvite(this.userId)
    if(invite == null){
      this.acceptInviteSection = false
    }else
    this.acceptInviteSection = true

  }

  acceptInvite(fromFriendName: string): void {
    this.friendService.AcceptInvite(fromFriendName)
    this.showAddFriendSection()
  }

  showAddFriendSection(): void {
    this.addFriendSection = true
    this.acceptInviteSection = false
    this.showFriendsSection = false

  }
  unshowAddFriendSection(): void {
    this.addFriendSection = false
    this.acceptInviteSection = false
    this.showFriendsSection = true
  }

  showAcceptInvite(): void {
    this.addFriendSection = false
    this.acceptInviteSection = true
    this.showFriendsSection = false
  }
  unShowAcceptInvite(): void {
    this.addFriendSection = false
    this.acceptInviteSection = false
    this.showFriendsSection = true
  }



}
//this.getFriends(this.userId)
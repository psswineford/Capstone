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
  userId: number = 0

  constructor(public uiservice: UiService, public userService: UserService, public friendService: FriendsService){
   userService.getAllUserNames()
   this.userId = uiservice.returnUserId()
   friendService.getFriendInvite(this.userId)
   friendService.getFriends(this.userId)
  }

  showAddFriendSection(): boolean {
    return this.addFriendSection = true
  }
  unshowAddFriendSection(): boolean {
   return  this.addFriendSection = false
  }

  showAcceptInvite(): boolean {
    return this.acceptInviteSection = true
  }
  unShowAcceptInvite(): boolean {
    return this.acceptInviteSection = false
  }

}
//this.getFriends(this.userId)
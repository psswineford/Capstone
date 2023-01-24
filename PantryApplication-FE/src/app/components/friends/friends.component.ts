import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

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

  constructor(public uiservice: UiService){
   uiservice.getAllUserNames()
   this.userId = uiservice.returnUserId()
   uiservice.getFriendInvite(this.userId)
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

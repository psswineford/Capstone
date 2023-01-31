import { Component } from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-friends-recipes',
  templateUrl: './friends-recipes.component.html',
  styleUrls: ['./friends-recipes.component.css']
})
export class FriendsRecipesComponent {

  constructor(public uiservice: UiService, public friendService: FriendsService){}
}

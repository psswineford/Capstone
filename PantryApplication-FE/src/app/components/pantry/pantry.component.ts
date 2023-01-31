import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { CookieService } from 'ngx-cookie-service';
import { PantryService } from 'src/app/services/pantry.service';

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent {
  id: number = 0
  name: string = ''
  weight: number = 0
  calories: number = 0
  quantity: number = 0
  userId: number = 0

  constructor(public uiservice: UiService, public pantryService: PantryService){
    pantryService.getPantry(uiservice.userId)
  }


  addQuantity(id: number, name: string , weight: number, calories: number, quantity: number, userId: number) : void {
    var updatedQuantity = quantity + 1
    this.pantryService.updatePantryItem(id, name, weight, calories, updatedQuantity, userId)
  }

  deleteQuantity(id: number, name: string , weight: number, calories: number, quantity: number, userId: number) : void {
    var updatedQuantity = quantity - 1
    this.pantryService.updatePantryItem(id, name, weight, calories, updatedQuantity, userId)
  }
}

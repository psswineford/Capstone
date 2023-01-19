import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-pantry-item',
  templateUrl: './add-pantry-item.component.html',
  styleUrls: ['./add-pantry-item.component.css']
})
export class AddPantryItemComponent {
  
  name: string = ''
  weight: number = 0
  calories: number = 0
  quantity: number = 0

  constructor(public uiservice: UiService){}

}

import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {

  name: string = ''
  instructions: string = ''
  ingredients: string = ''
  ingredients2: string = ''
  ingredients3: string = ''
  ingredients4: string = ''
  ingredients5: string = ''

  userId: number = 0
  constructor(public uiservice: UiService){}
}
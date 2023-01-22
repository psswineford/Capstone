import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeItems } from 'src/app/Data/RecipeItems';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css']
})
export class RecipeItemsComponent implements OnInit  {

  @Input() recipeItem : number = 0
  
  ingredients: RecipeItems[] = []

  
  constructor(public uiservice: UiService){}

  ngOnInit(): void {
    this.uiservice.getRecipeItems(this.recipeItem)
  }

}
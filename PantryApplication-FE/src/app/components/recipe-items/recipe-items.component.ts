import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeItems } from 'src/app/Data/RecipeItems';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css']
})
export class RecipeItemsComponent implements OnInit {

  @Input() recipeItem : number = 0
  
  ingredients: RecipeItems[] = []
  itemReturn: RecipeItems[] = []

  
  constructor(public uiservice: UiService){
    
  }

  setRecipeItems(): void{
    console.log("set recipe items" + this.recipeItem)
     this.uiservice.getRecipeItems(this.recipeItem)
     this.getRecipeItems()
     
  }

  getRecipeItems(): void {
    console.log('get recipe items')
    this.itemReturn = this.uiservice.returnRecipeItems()
    console.log("itemreturn" + this.itemReturn.length)
    for(let i = 0; i< this.itemReturn.length; i ++){
      this.ingredients[i] = this.itemReturn[i]
    }
    console.log("ingredients" + this.ingredients)
   
  }

  ngOnInit(): void {
    this.setRecipeItems()
  }

}

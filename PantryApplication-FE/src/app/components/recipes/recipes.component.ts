import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit{
  searchName: string = ''
  searchString: string = ''
  constructor(public uiservice: UiService){}


  
  searchReddit(name: string): string {
    this.searchName = name;
    this.searchString = `https://www.reddit.com/search/?q=${name}%20recipe`
    return this.searchString
  }

  ngOnInit(): void {
    
  }

}

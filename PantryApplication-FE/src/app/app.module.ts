import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { PantryComponent } from './components/pantry/pantry.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { FriendsComponent } from './components/friends/friends.component';
import { AddPantryItemComponent } from './components/add-pantry-item/add-pantry-item.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { RecipeItemsComponent } from './components/recipe-items/recipe-items.component';
import { FriendsRecipesComponent } from './components/friends-recipes/friends-recipes.component';


import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    PantryComponent,
    RecipesComponent,
    FriendsComponent,
    AddPantryItemComponent,
    AddUserComponent,
    AddRecipeComponent,
    RecipeItemsComponent,
    FriendsRecipesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

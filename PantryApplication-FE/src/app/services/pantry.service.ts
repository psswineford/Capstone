import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Pantry } from '../Data/Pantry';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class PantryService {

  constructor(private http: HttpClient, private service: UiService) { }

  private pantry: Pantry[] = []

  //private BASEURL: string = 'https://localhost:7214/api/'

  public returnPantry(): Pantry[] {
    return this.pantry
  }

  public getPantry(id: number) {
    this.http.get<Pantry[]>( `api/Pantry/id?id=${id}`)
      .pipe(take(1))
      .subscribe({
        next: data => {
          this.pantry = data
          this.returnPantry()
        },
        error: err => {
          this.service.showError( err + 'Unable to retrieve pantry items')
        }
      })
  }

  
  public createPantryItem(name: string, weight: number, calories: number, quantity: number) {
    this.http.post(`api/Pantry`, {
      name,
      weight,
      calories,
      quantity,
      userId: this.service.userId
    })
      .pipe(take(1))
      .subscribe({
        next: c => {
          this.service.setPantryPage()
        },
        error: err => {
          this.service.showError(err + 'unable to create pantry items')
        }
      })
  }

  public updatePantryItem(id: number, name: string, weight: number, calories: number, quantity: number, userId: number){
    this.http.put( `api/Pantry`, {
      id,
      name,
      weight,
      calories,
      quantity,
      userId
    })
    .pipe(take(1))
    .subscribe({
      next: c => {
        this.getPantry(this.service.userId)
      },
      error: err => {
        this.service.showError(err + 'unable to update pantry items')
      }
    })
  }

  public updatePantryByName(name: string): void {
    this.http.put( `api/Pantry/pantrybyname`, {
      name,
    })
    .pipe(take(1))
    .subscribe({
      next: c => {
        this.getPantry(this.service.userId)
      },
      error: err => {
        this.service.showError(err)
      }
    })
  }

  public deletePantryItem(id: number) {
    this.http.delete<Pantry[]>( `api/Pantry/id?id=${id}`)
    .pipe(take(1))
    .subscribe({
      next: data => {
        this.pantry = data
        this.getPantry(this.service.userId)
      },
      error: err => {
        this.service.showError(err + 'unable to delete')
      }
    })
  }

}

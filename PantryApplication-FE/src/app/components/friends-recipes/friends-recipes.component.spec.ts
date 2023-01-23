import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsRecipesComponent } from './friends-recipes.component';

describe('FriendsRecipesComponent', () => {
  let component: FriendsRecipesComponent;
  let fixture: ComponentFixture<FriendsRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendsRecipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendsRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

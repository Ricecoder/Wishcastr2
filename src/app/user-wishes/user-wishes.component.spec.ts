import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWishesComponent } from './user-wishes.component';

describe('UserWishesComponent', () => {
  let component: UserWishesComponent;
  let fixture: ComponentFixture<UserWishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopWishesComponent } from './top-wishes.component';

describe('TopWishesComponent', () => {
  let component: TopWishesComponent;
  let fixture: ComponentFixture<TopWishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopWishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopWishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEightComponent } from './list-eight.component';

describe('ListEightComponent', () => {
  let component: ListEightComponent;
  let fixture: ComponentFixture<ListEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

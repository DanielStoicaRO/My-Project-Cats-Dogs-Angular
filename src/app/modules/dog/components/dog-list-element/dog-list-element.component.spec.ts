import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogListElementComponent } from './dog-list-element.component';

describe('DogListElementComponent', () => {
  let component: DogListElementComponent;
  let fixture: ComponentFixture<DogListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogListElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

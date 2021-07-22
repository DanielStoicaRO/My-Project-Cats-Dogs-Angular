import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsListElementComponent } from './cats-list-element.component';

describe('CatsListElementComponent', () => {
  let component: CatsListElementComponent;
  let fixture: ComponentFixture<CatsListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsListElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

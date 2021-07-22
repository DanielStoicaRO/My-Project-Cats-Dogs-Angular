import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakemehomeListComponent } from './takemehome-list.component';

describe('TakemehomeListComponent', () => {
  let component: TakemehomeListComponent;
  let fixture: ComponentFixture<TakemehomeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakemehomeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakemehomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

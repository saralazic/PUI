import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellprodComponent } from './sellprod.component';

describe('SellprodComponent', () => {
  let component: SellprodComponent;
  let fixture: ComponentFixture<SellprodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellprodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

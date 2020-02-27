import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestuarantmenuComponent } from './restuarantmenu.component';

describe('RestuarantmenuComponent', () => {
  let component: RestuarantmenuComponent;
  let fixture: ComponentFixture<RestuarantmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestuarantmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestuarantmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

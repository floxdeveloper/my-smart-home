import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrundrissGridComponent } from './grundriss-grid.component';

describe('GrundrissGridComponent', () => {
  let component: GrundrissGridComponent;
  let fixture: ComponentFixture<GrundrissGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrundrissGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrundrissGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

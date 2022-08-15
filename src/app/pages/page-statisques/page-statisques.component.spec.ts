import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStatisquesComponent } from './page-statisques.component';

describe('PageStatisquesComponent', () => {
  let component: PageStatisquesComponent;
  let fixture: ComponentFixture<PageStatisquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageStatisquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageStatisquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

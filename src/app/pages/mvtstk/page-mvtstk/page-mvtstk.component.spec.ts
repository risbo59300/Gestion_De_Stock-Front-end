/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageMvtstkComponent } from './page-mvtstk.component';

describe('PageMvtstkComponent', () => {
  let component: PageMvtstkComponent;
  let fixture: ComponentFixture<PageMvtstkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMvtstkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMvtstkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

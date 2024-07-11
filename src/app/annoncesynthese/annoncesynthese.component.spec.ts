import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncesyntheseComponent } from './annoncesynthese.component';

describe('AnnoncesyntheseComponent', () => {
  let component: AnnoncesyntheseComponent;
  let fixture: ComponentFixture<AnnoncesyntheseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnoncesyntheseComponent]
    });
    fixture = TestBed.createComponent(AnnoncesyntheseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

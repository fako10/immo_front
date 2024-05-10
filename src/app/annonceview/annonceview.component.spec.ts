import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceviewComponent } from './annonceview.component';

describe('AnnonceviewComponent', () => {
  let component: AnnonceviewComponent;
  let fixture: ComponentFixture<AnnonceviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnonceviewComponent]
    });
    fixture = TestBed.createComponent(AnnonceviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

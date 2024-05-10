import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateannonceComponent } from './createannonce.component';

describe('CreateannonceComponent', () => {
  let component: CreateannonceComponent;
  let fixture: ComponentFixture<CreateannonceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateannonceComponent]
    });
    fixture = TestBed.createComponent(CreateannonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

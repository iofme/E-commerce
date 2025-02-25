import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCarregarMaisComponent } from './button-carregar-mais.component';

describe('ButtonCarregarMaisComponent', () => {
  let component: ButtonCarregarMaisComponent;
  let fixture: ComponentFixture<ButtonCarregarMaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonCarregarMaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonCarregarMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

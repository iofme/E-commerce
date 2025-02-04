import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoProdutoComponent } from './avaliacao-produto.component';

describe('AvaliacaoProdutoComponent', () => {
  let component: AvaliacaoProdutoComponent;
  let fixture: ComponentFixture<AvaliacaoProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliacaoProdutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacaoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisAvaliadosComponent } from './mais-avaliados.component';

describe('MaisAvaliadosComponent', () => {
  let component: MaisAvaliadosComponent;
  let fixture: ComponentFixture<MaisAvaliadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaisAvaliadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaisAvaliadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

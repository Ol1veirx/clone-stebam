import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneioDetalheComponent } from './torneio-detalhe.component';

describe('TorneioDetalheComponent', () => {
  let component: TorneioDetalheComponent;
  let fixture: ComponentFixture<TorneioDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TorneioDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorneioDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

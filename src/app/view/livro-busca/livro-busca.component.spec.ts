import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroBuscaComponent } from './livro-busca.component';

describe('LivroBuscaComponent', () => {
  let component: LivroBuscaComponent;
  let fixture: ComponentFixture<LivroBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivroBuscaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

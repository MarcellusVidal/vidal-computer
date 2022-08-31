import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoEncontrado2Component } from './nao-encontrado2.component';

describe('NaoEncontrado2Component', () => {
  let component: NaoEncontrado2Component;
  let fixture: ComponentFixture<NaoEncontrado2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaoEncontrado2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaoEncontrado2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

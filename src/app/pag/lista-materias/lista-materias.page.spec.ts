import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaMateriasPage } from './lista-materias.page';

describe('ListaMateriasPage', () => {
  let component: ListaMateriasPage;
  let fixture: ComponentFixture<ListaMateriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMateriasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaMateriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarmateriasPage } from './agregarmaterias.page';

describe('AgregarmateriasPage', () => {
  let component: AgregarmateriasPage;
  let fixture: ComponentFixture<AgregarmateriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarmateriasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarmateriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

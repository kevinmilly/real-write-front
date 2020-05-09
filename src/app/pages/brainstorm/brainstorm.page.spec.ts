import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrainstormPage } from './brainstorm.page';

describe('BrainstormPage', () => {
  let component: BrainstormPage;
  let fixture: ComponentFixture<BrainstormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrainstormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrainstormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { RhymeBookPage } from './rhymebook.page';

describe('RhymeBookPage', () => {
  let component: RhymeBookPage;
  let fixture: ComponentFixture<RhymeBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RhymeBookPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RhymeBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

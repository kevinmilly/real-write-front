import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { SoundPage } from './sound.page';

describe('SoundPage', () => {
  let component: SoundPage;
  let fixture: ComponentFixture<SoundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SoundPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

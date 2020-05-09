import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RelatedPage } from './related.page';

describe('RelatedPage', () => {
  let component: RelatedPage;
  let fixture: ComponentFixture<RelatedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RelatedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

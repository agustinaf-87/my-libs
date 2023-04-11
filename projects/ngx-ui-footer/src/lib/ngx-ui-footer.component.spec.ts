import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUiFooterComponent } from './ngx-ui-footer.component';

describe('NgxUiFooterComponent', () => {
  let component: NgxUiFooterComponent;
  let fixture: ComponentFixture<NgxUiFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxUiFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxUiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemotePlusComponent } from './remote-plus.component';

describe('RemotePlusComponent', () => {
  let component: RemotePlusComponent;
  let fixture: ComponentFixture<RemotePlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemotePlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemotePlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

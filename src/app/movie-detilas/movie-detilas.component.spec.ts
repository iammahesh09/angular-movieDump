import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetilasComponent } from './movie-detilas.component';

describe('MovieDetilasComponent', () => {
  let component: MovieDetilasComponent;
  let fixture: ComponentFixture<MovieDetilasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetilasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetilasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

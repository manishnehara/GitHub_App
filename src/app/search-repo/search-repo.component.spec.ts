import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRepoComponent } from './search-repo.component';

describe('SearchRepoComponent', () => {
  let component: SearchRepoComponent;
  let fixture: ComponentFixture<SearchRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

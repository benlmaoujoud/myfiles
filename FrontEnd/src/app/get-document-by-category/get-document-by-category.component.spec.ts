import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDocumentByCategoryComponent } from './get-document-by-category.component';

describe('GetDocumentByCategoryComponent', () => {
  let component: GetDocumentByCategoryComponent;
  let fixture: ComponentFixture<GetDocumentByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDocumentByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDocumentByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
